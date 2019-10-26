import express, {Application, Request, Response} from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {Mongo, MongoServiceOptions} from './services/mongo';
import {logger} from "./services/logger";
import {ServioService} from "./services/servio";
import {config} from "../config/config";
import {BillItem, BillType} from "./models/servio/bill";

/**
 * Express library wrapper, simplifies express app configuration
 * @class
 * */
export class ExpressApp {

    app: Application;
    _mongo: Mongo | undefined;

    constructor() {
        this.app = express();
    }

    /**
     * Makes app to use 'morgan' package
     * @param {string} format - Format for morgan package
     * @return {ExpressApp} instance
     * */
    useMorgan(format: string) {
        this.app.use(morgan(format));
        return this;
    }

    /**
     * Makes app to use 'body-parser' package
     * @return {ExpressApp} instance
     * */
    useJsonBodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        return this;
    }

    /**
     * Makes app to use 'morgan' package
     * @param {string} secret - a string or array used for signing cookies
     * @param {options} options - an object that is passed to cookie.parse as the second option
     * @return {ExpressApp} instance
     * */
    useCookieParser(
        secret: string | string[] | undefined,
        options: cookieParser.CookieParseOptions
    ) {
        this.app.use(cookieParser(secret, options));
        return this;
    }

    /**
     * Makes app to use 'cors' package
     * @return {ExpressApp} instance
     * */
    useCors() {
        this.app.use(cors());
        return this;
    }

    /**
     * Configures MongoDB service via specified options, and tries to connect
     * @param {object} options - The options for mongodb service
     * */
    async initMongoService(options: MongoServiceOptions) {
        this._mongo = new Mongo(options);
        await this._mongo.connect();
    }

    useRoutes() {
        let servio = new ServioService(config.servio.url);

        this.app.get('/api/categories', async (req: Request, res: Response) => {
            let categories = await servio.GetCategories();
            res.send(categories);
        });

        this.app.get('/api/categories/:id', async (req: Request, res: Response) => {
            let id = parseInt(req.params.id);
            let products = await servio.GetProducts(id);
            res.send(products);
        });

        this.app.get('/api/bill/:id', async (req: Request, res: Response) => {
            let id = parseInt(req.params.id);
            let bill = await servio.GetBill(id);
            console.log('BILL:', bill);
            res.send(bill);
        });

        this.app.put('/api/bill/:id', async (req: Request, res: Response) => {
            if (req.body.type == null) {
                res.status(400).send("'type' field is required");
                return;
            }

            let id = parseInt(req.params.id);
            console.log(`req.params: ${JSON.stringify(req.params)}`);
            console.log(`id: [${id}]`);
            let type = <BillType>req.body.type;
            let result = await servio.ChangeBillType(id, type);
            res.send(result);
        });

        this.app.post('/api/bill', async (req: Request, res: Response) => {
            if (req.body.type == null) {
                console.log(`req.body.type equals to [${req.body.type}]`);
                res.status(400).send("'type' field is required");
                return;
            }

            let type = <BillType>req.body.type;
            let result = await servio.CreateBill(type);
            res.send(result);
        });

        this.app.post('/api/bill/:id/item', async (req: Request, res: Response) => {
            let id = parseInt(req.params.id);
            let item = <BillItem>req.body;
            item.BillID = id;

            let result = await servio.AddItemToBill(item);
            res.send(result);
        });

        this.app.put('/api/bill/:id/item', async (req: Request, res: Response) => {
            let id = parseInt(req.params.id);
            let item = <BillItem>req.body;
            item.BillID = id;

            let result = await servio.ChangeItemInBill(item);
            res.send(result);
        });

        this.app.delete('/api/bill/:id/item', async (req: Request, res: Response) => {
            let id = parseInt(req.params.id);
            let item = <BillItem>req.body;
            item.BillID = id;

            let result = await servio.DeleteItemFromBill(item);
            res.send(result);
        });
    }

    /**
     * Runs application with specified options
     * @param port - port to listen on
     * @return {ExpressApp} instance
     * */
    listen(port: number) {
        this.app.listen(port, () => logger.info(`Server listen on port ${port}`));
    }
}


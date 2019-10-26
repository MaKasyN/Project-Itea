import mongoose from 'mongoose';
import {logger} from './logger'
import bluebird from 'bluebird';

export class Mongo {
    private readonly _options: MongoServiceOptions;

    constructor(options: MongoServiceOptions) {
        this._options = options;
    }

    public async connect() {
        if (this._options.useBluebird) {
            mongoose.Promise = bluebird;
        }

        const mongoUri = `mongodb://${this._options.host}:${this._options.port}/${this._options.dbName}`;
        await this.connectToDb(mongoUri);

        mongoose.connection.on('error', () => {
            logger.error(`unable to connect to database: [${mongoUri}]`);
        });

        mongoose.connection.on('disconnect', async () => {
            logger.warn(`disconnected from database [${mongoUri}]`);
            setTimeout(
                async () => await this.connectToDb(mongoUri),
                this._options.reconnectIntervalMs
            );
        })
    }

    private async connectToDb(uri: string) {
        await mongoose.connect(uri, this._options.connectOptions);
    }
}

export class MongoServiceOptions {
    private readonly _useBluebird: boolean;
    private readonly _host: string;
    private readonly _port: number;
    private readonly _dbName: string;
    private readonly _connectOptions: any;
    private readonly _reconnectIntervalMs: number;

    constructor(
        useBluebird: boolean,
        host: string,
        port: number,
        dbName: string,
        connectOptions: any,
        reconnectIntervalMs: number
    ) {
        this._useBluebird = useBluebird;
        this._host = host;
        this._port = port;
        this._dbName = dbName;
        this._connectOptions = connectOptions;
        this._reconnectIntervalMs = reconnectIntervalMs;
    }

    get useBluebird(): boolean {
        return this._useBluebird;
    }

    get host(): string {
        return this._host;
    }

    get port(): number {
        return this._port;
    }

    get dbName(): string {
        return this._dbName;
    }

    get connectOptions(): any {
        return this._connectOptions;
    }

    get reconnectIntervalMs(): number {
        return this._reconnectIntervalMs;
    }
}

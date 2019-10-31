import axios from "axios";
import moment = require("moment");
import {Category} from "../models/category";
import {Product} from "../models/product";
import {
    BillSetOperationType,
    BillType,
    GetBillResponse,
    SetBillItem,
    SetBillItemResponse,
    SetBillResponse
} from "../models/servio/bill";
import {logger} from "./logger";

export class ServioApiService {
    private static DATES_FORMAT = 'YYYY-MM-DD hh:mm:ss';
    private static SET_BILL_PATH = '/POSExternal/Set_Bill';
    private static SET_BILL_ITEM_PATH = '/POSExternal/Set_BillItem';
    private static GET_TARIF_ITEMS_PATH = '/POSExternal/Get_TarifItems';
    private static GET_TARIF_ITEM_PATH = '/POSExternal/Get_TarifItemExt';
    private static GET_BILL_PATH = '/POSExternal/Get_Bill';
    private readonly _servioUrl: string;

    constructor(servioUrl: string) {
        this._servioUrl = servioUrl;
    }

    public async GetTarifItems(): Promise<Category[]> {
        logger.debug(`(servio.api): GetTarifItems`);

        let response = await axios.post(
            `${this._servioUrl}${ServioApiService.GET_TARIF_ITEMS_PATH}`,
        );

        logger.debug(`(servio.api): GetTarifItems Servio response (${response.status} ${response.statusText})`);
        logger.silly(`(servio.api): GetTarifItems Servio response: [${JSON.stringify(response.data)}]`);

        return <Category[]>(response.data.Items);
    }

    public async GetTarifItem(categoryId: number): Promise<Product[]> {
        logger.debug(`(servio.api): GetTarifItem by category id [${categoryId}]`);

        let response = await axios.post(
            `${this._servioUrl}${ServioApiService.GET_TARIF_ITEM_PATH}`,
            {
                GroupMenuID: categoryId,
            }
        );

        logger.debug(`(servio.api): GetTarifItem Servio response (${response.status} ${response.statusText}]`);
        logger.silly(`(servio.api): GetTarifItem Servio response: [${JSON.stringify(response.data)}]`);

        let productsGroup = response.data
            .Groups.filter((group: any) => group.ID === categoryId)
        ;

        logger.debug(`(servio.api): GetTarifItem filtered products group (${productsGroup.length})`);
        logger.silly(`(servio.api): GetTarifItem filtered products group: [${productsGroup}]`);

        return productsGroup.length > 0 ? productsGroup[0].Items : [];
    }

    public async GetBill(billId: number): Promise<GetBillResponse> {
        logger.debug(`(servio.api): GetBill by id [${billId}]`);

        let response = await axios.post(
            `${this._servioUrl}${ServioApiService.GET_BILL_PATH}`,
            {
                BillID: billId,
            }
        );

        logger.debug(`(servio.api): GetBill Servio response (${response.status} ${response.statusText}]`);
        logger.silly(`(servio.api): GetBill Servio response [${JSON.stringify(response.data)}]`);

        return response.data;
    }

    public async SetBill(operationType: BillSetOperationType, billType: BillType, billId: number, userName: string): Promise<SetBillResponse> {
        logger.debug(`(servio.api): SetBill by id [${billId}]`);

        let firstDate = moment(new Date()).format(ServioApiService.DATES_FORMAT);
        let lastDate = moment(firstDate).add(1, 'minutes');

        let body = {
            OperType: operationType,
            BillType: billType,
            BillID: billId,
            UserName: userName,
            FirstDate: firstDate,
            LastDate: lastDate,
        };
        logger.debug(`(servio.api): SetBill request body: [${JSON.stringify(body)}]`);

        let response = await axios.post(
            `${this._servioUrl}${ServioApiService.SET_BILL_PATH}`,
            body,
        );

        logger.debug(`(servio.api): SetBill Servio response (${response.status} ${response.statusText}]`);
        logger.silly(`(servio.api): SetBill Servio response: [${JSON.stringify(response.data)}]`);

        return response.data;
    }

    public async SetBillItem(item: SetBillItem): Promise<SetBillItemResponse> {
        logger.debug(`(servio.api): SetBillItem`);

        let body = {
            OperType: item.operationType,
            BillID: item.BillID,
            BillItemID: item.BillItemID,
            TarifItemID: item.TarifItemID,
            ParentID: item.ParentID,
            Quantity: item.Quantity,
            DecimalPrice: item.DecimalPrice,
        };

        logger.debug(`(servio.api): SetBillItem request body (${JSON.stringify(body)}]`);

        let response = await axios.post(
            `${this._servioUrl}${ServioApiService.SET_BILL_ITEM_PATH}`,
            body,
        );
        logger.debug(`(servio.api): SetBillItem Servio response (${response.status} ${response.statusText}]`);
        logger.silly(`(servio.api): SetBillItem Servio response: [${JSON.stringify(response.data)}]`);

        return response.data;
    }
}
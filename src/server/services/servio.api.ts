import axios, {AxiosResponse} from "axios";
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
        let plainCategories = await axios.post(
            `${this._servioUrl}${ServioApiService.GET_TARIF_ITEMS_PATH}`,
        );
        return <Category[]>(plainCategories.data.Items);
    }

    public async GetTarifItem(categoryId: number): Promise<Product[]> {
        let plainProducts = await axios.post(
            `${this._servioUrl}${ServioApiService.GET_TARIF_ITEM_PATH}`,
            {
                GroupMenuID: categoryId,
            }
        );

        console.log(`SERVIO RESPONSE: ${JSON.stringify(plainProducts.data)}`);

        let productsGroup = plainProducts.data
            .Groups.filter((group: any) => group.ID === categoryId)
        ;

        return productsGroup.length > 0 ? productsGroup[0].Items : [];
    }

    public async GetBill(billId: number): Promise<GetBillResponse> {
        let bill = await axios.post(
            `${this._servioUrl}${ServioApiService.GET_BILL_PATH}`,
            {
                BillID: billId,
            }
        );

        return bill.data;
    }

    public async SetBill(operationType: BillSetOperationType, billType: number, billId: number, userName: string): Promise<SetBillResponse> {
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
        console.log(`SET BILL BODY: ${JSON.stringify(body)}`);

        let bill = await axios.post(
            `${this._servioUrl}${ServioApiService.SET_BILL_PATH}`,
            body,
        );

        return bill.data;
    }

    public async SetBillItem(item: SetBillItem): Promise<SetBillItemResponse> {
        let body = {
            OperType: item.operationType,
            BillID: item.BillID,
            BillItemID: item.BillItemID,
            TarifItemID: item.TarifItemID,
            ParentID: item.ParentID,
            Quantity: item.Quantity,
            DecimalPrice: item.DecimalPrice,
        };

        console.log(`SET BILL ITEM BODY: ${JSON.stringify(body)}`);

        let bill = await axios.post(
            `${this._servioUrl}${ServioApiService.SET_BILL_ITEM_PATH}`,
            body,
        );

        return bill.data;
    }
}
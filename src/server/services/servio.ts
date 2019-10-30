import {ServioApiService} from "./servio.api";
import {
    BillType,
    BillSetOperationType,
    BillSetItemOperationType,
    BillItem,
    SetBillItem,
    GetBillResponse,
    SetBillResponse,
} from "../models/servio/bill";
import {Category} from "../models/category";
import {Product} from "../models/product";
import {logger} from './logger';
import {Logger} from "winston";

export class ServioService {
    private readonly _apiService: ServioApiService;
    private readonly _logger: Logger;

    constructor(servioUrl: string) {
        this._apiService = new ServioApiService(servioUrl);
        this._logger = logger;
    }

    public async GetCategories(): Promise<Category[]> {
        this._logger.verbose(`(servio): get categories`);

        return this._apiService.GetTarifItems();
    }

    public async GetProducts(categoryId: number): Promise<Product[]> {
        this._logger.verbose(`(servio): get product by id: ${categoryId}`);

        return this._apiService.GetTarifItem(categoryId);
    }

    public async GetBill(billId: number): Promise<GetBillResponse> {
        this._logger.verbose(`(servio): get bill [${billId}]`);

        return this._apiService.GetBill(billId);
    }

    public async CreateBill(type: BillType): Promise<SetBillResponse> {
        this._logger.verbose(`(servio): create bill with type [${JSON.stringify(type)}]`);

        return this._apiService.SetBill(BillSetOperationType.CreateBill, type, 0, 'Tester');
    }

    public async ChangeBillType(billId: number, type: BillType): Promise<SetBillResponse> {
        this._logger.verbose(`(servio): change bill [${billId}] type [${JSON.stringify(type)}]`);

        return this._apiService.SetBill(BillSetOperationType.ChangeBill, type, billId, 'Tester');
    }

    public async AddItemToBill(item: BillItem) {
        this._logger.verbose(`(servio): add bill item [${JSON.stringify(item)}]`);

        let setBillItem = <SetBillItem>{...item, operationType: BillSetItemOperationType.AddNewItem};
        return await this._apiService.SetBillItem(setBillItem);
    }

    public async ChangeItemInBill(item: BillItem) {
        this._logger.verbose(`(servio): change bill item [${JSON.stringify(item)}]`);

        let setBillItem = <SetBillItem>{...item, operationType: BillSetItemOperationType.ChangeExistedItem};
        return await this._apiService.SetBillItem(setBillItem);
    }

    public async DeleteItemFromBill(item: BillItem) {
        this._logger.verbose(`(servio): delete bill item [${JSON.stringify(item)}]`);

        let setBillItem = <SetBillItem>{...item, operationType: BillSetItemOperationType.DeleteExistedItem};
        return await this._apiService.SetBillItem(setBillItem);
    }
}

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

export class ServioService {
    private readonly _apiService: ServioApiService;

    constructor(servioUrl: string) {
        this._apiService = new ServioApiService(servioUrl);
    }

    public async GetCategories(): Promise<Category[]> {
        return this._apiService.GetTarifItems();
    }

    public async GetProducts(categoryId: number): Promise<Product[]> {
        return this._apiService.GetTarifItem(categoryId);
    }

    public async GetBill(billId: number): Promise<GetBillResponse> {
        return this._apiService.GetBill(billId);
    }

    public async CreateBill(type: BillType): Promise<SetBillResponse> {
        console.log(`SERVIO CREATE BILL TYPE: ${type}`);
        return this._apiService.SetBill(BillSetOperationType.CreateBill, type, 0, 'Tester');
    }

    public async ChangeBillType(billId: number, type: BillType): Promise<SetBillResponse> {
        return this._apiService.SetBill(BillSetOperationType.ChangeBill, type, billId, 'Tester');
    }

    public async AddItemToBill(item: BillItem) {
        let setBillItem = <SetBillItem>{...item, operationType: BillSetItemOperationType.AddNewItem};
        return await this._apiService.SetBillItem(setBillItem);
    }

    public async ChangeItemInBill(item: BillItem) {
        let setBillItem = <SetBillItem>{...item, operationType: BillSetItemOperationType.ChangeExistedItem};
        return await this._apiService.SetBillItem(setBillItem);
    }

    public async DeleteItemFromBill(item: BillItem) {
        let setBillItem = <SetBillItem>{...item, operationType: BillSetItemOperationType.DeleteExistedItem};
        return await this._apiService.SetBillItem(setBillItem);
    }
}

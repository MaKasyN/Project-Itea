export interface BillItem {
    BillID: number;
    BillItemID: number;
    TarifItemID: number;
    ParentID: number;
    Quantity: number;
    DecimalPrice: number;
}

export interface SetBillItem extends BillItem {
    operationType: BillSetItemOperationType;
}

export enum BillType {
    Common = 1,
    Reservation = 4,
    Delivery = 8,
}

export enum BillSetOperationType {
    CreateBill = 1,
    ChangeBill = 2,
}

export enum BillSetItemOperationType {
    AddNewItem = 1,
    ChangeExistedItem = 2,
    DeleteExistedItem = 3,
}

export interface SetBillItemResponse {
    Error: string;
    BillItemID: number;
    BillSum: number;
}

export interface SetBillResponse {
    BillID: number;
    BillNumber: number;
    Error: string;
}

export interface GetBillResponse {
    Closed: string;
    Printed: string;
    LastDate: string;
    CompanyName: string;
    CompanyCode: string;
    BillType: number;
    IsPrepared: false;
    Description: string;
    PlaceCode: string;
    Items: GetBillResponseItem[];
    EventName: string;
    UserName: string;
    Error: string;
    Total: number;
    ShortComment: string;
    FirstDate: string;
    Locked: string
}

export interface GetBillResponseItem {
    BillItemID: number
    ParentID: number
    TarifItemID: number
    ModifierID: number
    Name: string
    ShortName: string
    Description: string
    Comment: string
    Quantiny: number
    Price: number
    Total: number
    ItemType: string
    PickUp: boolean
    PhotoUrl: string
    ComplexID: number
    SubItemID: number
    SubItemName: string
    Ordered: string
    Status: number
    IsManualPrice: number
    Seat: number
    Pos: number
    TimeOut: number
}

import RefundsById from './RefundById';
interface Refunds {
    DeliveryRequestId: number;
    DeliveryRequestLineId: number;
    RefundId: number;
    RefundType: number;
    RefundDateTime: string;
    OrderExternalId: string;
    OrderLineExternalId: number;
    ItemId: number;
    SizeIndex: number;
    refunds: RefundsById;
}
export default Refunds;

export declare enum OrderStateScope {
    Placement = "placement",
    Financial = "financial",
    Preparation = "preparation",
    Dispatch = "dispatch",
    Return = "return",
    Replacement = "replacement"
}
export declare class OrderConcreteState<T extends OrderStateScope> {
    scope: T;
    value: string;
    constructor(scope: T, value: string);
    private static knownStates;
    private static knownScopedStatesFactories;
    static readonly getScope: () => OrderStateScope;
    static find(scope: OrderStateScope, value: string): OrderConcreteState<OrderStateScope>;
    static factory<T extends OrderStateScope, U extends OrderConcreteState<T>>(this: {
        new (...args: any[]): U;
    } & OrderStateWithScope<T>, value: string): U;
    static registerFactory(factory: typeof OrderConcreteState): void;
    static serialize(instance: OrderConcreteState<OrderStateScope>): string;
    static deserialize<T extends OrderStateScope>(serializedForm: string): OrderConcreteState<T>;
}
interface OrderStateWithScope<T extends OrderStateScope> {
    getScope(): T;
}
export declare class OrderPlacementState extends OrderConcreteState<OrderStateScope.Placement> {
    static readonly getScope: () => OrderStateScope;
}
export declare class OrderFinancialState extends OrderConcreteState<OrderStateScope.Financial> {
    static readonly getScope: () => OrderStateScope;
}
export declare class OrderPreparationState extends OrderConcreteState<OrderStateScope.Preparation> {
    static readonly getScope: () => OrderStateScope;
}
export declare class OrderDispatchState extends OrderConcreteState<OrderStateScope.Dispatch> {
    static readonly getScope: () => OrderStateScope;
}
export declare class OrderReturnState extends OrderConcreteState<OrderStateScope.Return> {
    static readonly getScope: () => OrderStateScope;
}
export declare class OrderReplacementState extends OrderConcreteState<OrderStateScope.Replacement> {
    static readonly getScope: () => OrderStateScope;
}
export default class OrderState {
    static Placement: {
        Requested: OrderPlacementState;
        Confirmed: OrderPlacementState;
        Failed: OrderPlacementState;
        Implicit: OrderPlacementState;
        Cancelled: OrderPlacementState;
    };
    static Financial: {
        AwaitingPayment: OrderFinancialState;
        PaymentProcessing: OrderFinancialState;
        PaymentSuccessful: OrderFinancialState;
        PaymentError: OrderFinancialState;
        PendingCashOnDelivery: OrderFinancialState;
        PaidCashOnDelivery: OrderFinancialState;
        RefundedPartial: OrderFinancialState;
        RefundedFull: OrderFinancialState;
    };
    static Preparation: {
        Requested: OrderPreparationState;
        Assigned: OrderPreparationState;
        Queued: OrderPreparationState;
        Started: OrderPreparationState;
        Packed: OrderPreparationState;
        Abandoned: OrderPreparationState;
        Incidence: OrderPreparationState;
    };
    static Dispatch: {
        AwaitingCarrier: OrderDispatchState;
        InTransit: OrderDispatchState;
        AwaitingCustomerPickup: OrderDispatchState;
        CollectedPartial: OrderDispatchState;
        CollectedFull: OrderDispatchState;
        DeliveredPartial: OrderDispatchState;
        DeliveredFull: OrderDispatchState;
        Completed: OrderDispatchState;
        DeliveryIncidence: OrderDispatchState;
        Lost: OrderDispatchState;
        Cancelled: OrderDispatchState;
    };
    static Return: {
        Requested: OrderReturnState;
        RequestApproved: OrderReturnState;
        RequestDenied: OrderReturnState;
        AwaitingDeposit: OrderReturnState;
        Deposited: OrderReturnState;
        AwaitingCarrier: OrderReturnState;
        InTransit: OrderReturnState;
        Received: OrderReturnState;
        Accepted: OrderReturnState;
        Rejected: OrderReturnState;
        CompletedPartial: OrderReturnState;
        CompletedFull: OrderReturnState;
    };
    static Replacement: {
        Requested: OrderReplacementState;
        RequestApproved: OrderReplacementState;
        RequestDenied: OrderReplacementState;
        AwaitingDeposit: OrderReplacementState;
        Deposited: OrderReplacementState;
        ReturnAwaitingCarrier: OrderReplacementState;
        ReturnInTransit: OrderReplacementState;
        Received: OrderReplacementState;
        Accepted: OrderReplacementState;
        Rejected: OrderReplacementState;
        DispatchAwaitingCarrier: OrderReplacementState;
        DispatchInTransit: OrderReplacementState;
        DispatchAwaitingCustomerPickup: OrderReplacementState;
        DispatchCollected: OrderReplacementState;
        DispatchDelivered: OrderReplacementState;
        DispatchDeliveryIncidence: OrderReplacementState;
        Completed: OrderReplacementState;
    };
    private readonly concreteStates;
    constructor(...states: OrderConcreteState<OrderStateScope>[]);
    getStates(): OrderConcreteState<OrderStateScope>[];
    getScopeStates<T extends OrderStateScope>(scope: T): OrderConcreteState<T>[];
    has(state: OrderConcreteState<OrderStateScope>): boolean;
    hasAll(...states: OrderConcreteState<OrderStateScope>[]): boolean;
    hasAny(...states: OrderConcreteState<OrderStateScope>[]): boolean;
    hasScope(scope: OrderStateScope): boolean;
    add(state: OrderConcreteState<OrderStateScope>): this;
    add(states: OrderConcreteState<OrderStateScope>[]): this;
    delete(state: OrderConcreteState<OrderStateScope>): this;
    setScopes(state: OrderConcreteState<OrderStateScope>): this;
    setScopes(states: OrderConcreteState<OrderStateScope>[]): this;
    clearScope(scope: OrderStateScope): this;
    clear(): this;
    equals(anotherOrderState: OrderState): boolean;
    static serialize(instance: OrderState): string;
    static deserialize(serializedForm: string): OrderState;
}
export {};

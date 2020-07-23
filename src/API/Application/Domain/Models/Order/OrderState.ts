import * as _ from 'lodash';

export enum OrderStateScope {
    Placement = 'placement',
    Financial = 'financial',
    Preparation = 'preparation',
    Dispatch = 'dispatch',
    Return = 'return',
    Replacement = 'replacement',
}

export class OrderConcreteState<T extends OrderStateScope> {

    public constructor(public scope: T, public value: string) {}

    private static knownStates: Map<string, OrderConcreteState<OrderStateScope>> = new Map();

    private static knownScopedStatesFactories: Map<OrderStateScope, typeof OrderConcreteState> = new Map();

    static readonly getScope = (): OrderStateScope => {
        throw "Can't get type of generic aaa state";
    };

    public static find(scope: OrderStateScope, value: string): OrderConcreteState<OrderStateScope> {
        return Array.from(OrderConcreteState.knownStates.values()).find(state =>
            state.scope == scope && state.value == value);
    }

    static factory<T extends OrderStateScope, U extends OrderConcreteState<T>>(this: { new(...args: any[]): U } & OrderStateWithScope<T>, value: string): U {

        let that = this;
        OrderConcreteState.registerFactory(that as /*typeof OrderConcreteState*/ any);

        let key = OrderConcreteState.serialize({scope: this.getScope(), value});
        if (OrderConcreteState.knownStates.has(key)) {
            return OrderConcreteState.knownStates.get(key) as U;
        }
        let aaaState = new this(this.getScope(), value);
        OrderConcreteState.knownStates.set(key, aaaState);
        return aaaState;
    }

    static registerFactory(factory: typeof OrderConcreteState): void {

        let scope: OrderStateScope = factory.getScope();
        if (!OrderConcreteState.knownScopedStatesFactories.has(scope)) {
            OrderConcreteState.knownScopedStatesFactories.set(scope, factory);
        }
    }

    public static serialize(instance: OrderConcreteState<OrderStateScope>): string {
        return instance.scope + '.' + instance.value;
    }

    public static deserialize<T extends OrderStateScope>(serializedForm: string): OrderConcreteState<T> {
        let [scope, value] = serializedForm.split('.');
        let stateFactory: typeof OrderConcreteState = OrderConcreteState.knownScopedStatesFactories.get(scope as OrderStateScope);
        return stateFactory.factory(value) as OrderConcreteState<T>;
    }
}

interface OrderStateWithScope<T extends OrderStateScope> {
    getScope(): T;
}

export class OrderPlacementState extends OrderConcreteState<OrderStateScope.Placement> {
    static readonly getScope = () => OrderStateScope.Placement;
}
export class OrderFinancialState extends OrderConcreteState<OrderStateScope.Financial> {
    static readonly getScope = () => OrderStateScope.Financial;
}
export class OrderPreparationState extends OrderConcreteState<OrderStateScope.Preparation> {
    static readonly getScope = () => OrderStateScope.Preparation;
}
export class OrderDispatchState extends OrderConcreteState<OrderStateScope.Dispatch> {
    static readonly getScope = () => OrderStateScope.Dispatch;
}
export class OrderReturnState extends OrderConcreteState<OrderStateScope.Return> {
    static readonly getScope = () => OrderStateScope.Return;
}
export class OrderReplacementState extends OrderConcreteState<OrderStateScope.Replacement> {
    static readonly getScope = () => OrderStateScope.Replacement;
}

export default class OrderState {

    static Placement = {
        Requested: OrderPlacementState.factory('requested'),
        Confirmed: OrderPlacementState.factory('confirmed'),
        Failed: OrderPlacementState.factory('failed'),
        Implicit: OrderPlacementState.factory('implicit'),
        Cancelled: OrderPlacementState.factory('cancelled'),
    };
    static Financial = {
        AwaitingPayment: OrderFinancialState.factory('awaiting_payment'),
        PaymentProcessing: OrderFinancialState.factory('payment_processing'),
        PaymentSuccessful: OrderFinancialState.factory('payment_successful'),
        PaymentError: OrderFinancialState.factory('payment_error'),
        PendingCashOnDelivery: OrderFinancialState.factory('pending_cash_on_delivery'),
        PaidCashOnDelivery: OrderFinancialState.factory('paid_cash_on_delivery'),
        RefundedPartial: OrderFinancialState.factory('refunded_partial'),
        RefundedFull: OrderFinancialState.factory('refunded_full'),
    };
    static Preparation = {
        Requested: OrderPreparationState.factory('requested'),
        Assigned: OrderPreparationState.factory('assigned'),
        Queued: OrderPreparationState.factory('queued'),
        Started: OrderPreparationState.factory('started'),
        Packed: OrderPreparationState.factory('packed'),
        Abandoned: OrderPreparationState.factory('abandoned'),
        Incidence: OrderPreparationState.factory('incidence'),
    };
    static Dispatch = {
        AwaitingCarrier: OrderDispatchState.factory('awaiting_carrier'),
        InTransit: OrderDispatchState.factory('in_transit'),
        AwaitingCustomerPickup: OrderDispatchState.factory('awaiting_customer_pickup'),
        CollectedPartial: OrderDispatchState.factory('collected_partial'),
        CollectedFull: OrderDispatchState.factory('collected_full'),
        DeliveredPartial: OrderDispatchState.factory('delivered_partial'),
        DeliveredFull: OrderDispatchState.factory('delivered_full'),
        Completed: OrderDispatchState.factory('completed'),
        DeliveryIncidence: OrderDispatchState.factory('delivery_incidence'),
        Lost: OrderDispatchState.factory('lost'),
        Cancelled: OrderDispatchState.factory('cancelled'),
    };
    static Return = {
        Requested: OrderReturnState.factory('requested'),
        RequestApproved: OrderReturnState.factory('request_approved'),
        RequestDenied: OrderReturnState.factory('request_denied'),
        AwaitingDeposit: OrderReturnState.factory('awaiting_deposit'),
        Deposited: OrderReturnState.factory('deposited'),
        AwaitingCarrier: OrderReturnState.factory('awaiting_carrier'),
        InTransit: OrderReturnState.factory('in_transit'),
        Received: OrderReturnState.factory('received'),
        Accepted: OrderReturnState.factory('accepted'),
        Rejected: OrderReturnState.factory('rejected'),
        CompletedPartial: OrderReturnState.factory('completed_partial'),
        CompletedFull: OrderReturnState.factory('completed_full'),
    };
    static Replacement = {
        Requested: OrderReplacementState.factory('requested'),
        RequestApproved: OrderReplacementState.factory('request_approved'),
        RequestDenied: OrderReplacementState.factory('request_denied'),
        AwaitingDeposit: OrderReplacementState.factory('awaiting_deposit'),
        Deposited: OrderReplacementState.factory('deposited'),
        ReturnAwaitingCarrier: OrderReplacementState.factory('return_awaiting_carrier'),
        ReturnInTransit: OrderReplacementState.factory('return_in_transit'),
        Received: OrderReplacementState.factory('received'),
        Accepted: OrderReplacementState.factory('accepted'),
        Rejected: OrderReplacementState.factory('rejected'),
        DispatchAwaitingCarrier: OrderReplacementState.factory('dispatch_awaiting_carrier'),
        DispatchInTransit: OrderReplacementState.factory('dispatch_in_transit'),
        DispatchAwaitingCustomerPickup: OrderReplacementState.factory('dispatch_awaiting_customer_pickup'),
        DispatchCollected: OrderReplacementState.factory('dispatch_collected'),
        DispatchDelivered: OrderReplacementState.factory('dispatch_delivered'),
        DispatchDeliveryIncidence: OrderReplacementState.factory('dispatch_delivery_incidence'),
        Completed: OrderReplacementState.factory('completed'),
    };

    private readonly concreteStates: Set<OrderConcreteState<OrderStateScope>>;

    constructor(...states: OrderConcreteState<OrderStateScope>[]) {
        this.concreteStates = new Set(states);
    }

    public getStates(): OrderConcreteState<OrderStateScope>[] {
        return Array.from(this.concreteStates);
    }

    public getScopeStates<T extends OrderStateScope>(scope: T): OrderConcreteState<T>[] {
        return Array.from(this.concreteStates).filter(value => value.scope == scope) as OrderConcreteState<T>[];
    }

    public has(state: OrderConcreteState<OrderStateScope>): boolean {
        return this.concreteStates.has(state);
    }

    public hasAll(...states: OrderConcreteState<OrderStateScope>[]): boolean {
        return states.every(state => this.has(state));
    }

    public hasAny(...states: OrderConcreteState<OrderStateScope>[]): boolean {
        return states.some(state => this.has(state));
    }

    public hasScope(scope: OrderStateScope): boolean {
        return !!this.getScopeStates(scope).length;
    }

    public add(state: OrderConcreteState<OrderStateScope>): this;
    public add(states: OrderConcreteState<OrderStateScope>[]): this;
    public add(stateOrStates: OrderConcreteState<OrderStateScope>|OrderConcreteState<OrderStateScope>[]): this {
        if (Array.isArray(stateOrStates)) {
            stateOrStates.forEach(value => this.add(value));
        } else {
            this.concreteStates.add(stateOrStates);
        }
        return this;
    }

    public delete(state: OrderConcreteState<OrderStateScope>): this {
        this.concreteStates.delete(state);
        return this;
    }

    /** Adds a concrete state to the state, overriding all previous concrete states from the same scope.
     * @param state The concrete state to add and whose scope will be cleared. */
    public setScopes(state: OrderConcreteState<OrderStateScope>): this;
    /** Adds the state some concrete states, overriding all previous concrete states from the matching scopes.
     * @param states The concrete state list to add and whose scopes will be cleared. */
    public setScopes(states: OrderConcreteState<OrderStateScope>[]): this;
    public setScopes(stateOrStates: OrderConcreteState<OrderStateScope>|OrderConcreteState<OrderStateScope>[]): this {
        if (Array.isArray(stateOrStates)) {
            let differentScopes = new Set(stateOrStates.map(value => value.scope));
            differentScopes.forEach(scope => {
                this.clearScope(scope);
            });
        } else {
            this.clearScope(stateOrStates.scope);
        }
        this.add(stateOrStates as any);
        return this;
    }

    public clearScope(scope: OrderStateScope): this {
        this.getScopeStates(scope).forEach(this.delete.bind(this));
        return this;
    }

    public clear(): this {
        this.concreteStates.clear();
        return this;
    }

    public equals(anotherOrderState: OrderState) {
        return _.isEqual(this.concreteStates, anotherOrderState.concreteStates);
    }

    public static serialize(instance: OrderState): string {
        return instance.getStates().map(value => OrderConcreteState.serialize(value)).join(',');
    }

    public static deserialize(serializedForm: string): OrderState {
        return new OrderState(
            ...serializedForm
                .split(',')
                .map(value => OrderConcreteState.deserialize(value))
                .filter(Boolean)
        );
    }
}

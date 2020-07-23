"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReplacementState = exports.OrderReturnState = exports.OrderDispatchState = exports.OrderPreparationState = exports.OrderFinancialState = exports.OrderPlacementState = exports.OrderConcreteState = exports.OrderStateScope = void 0;
const _ = __importStar(require("lodash"));
var OrderStateScope;
(function (OrderStateScope) {
    OrderStateScope["Placement"] = "placement";
    OrderStateScope["Financial"] = "financial";
    OrderStateScope["Preparation"] = "preparation";
    OrderStateScope["Dispatch"] = "dispatch";
    OrderStateScope["Return"] = "return";
    OrderStateScope["Replacement"] = "replacement";
})(OrderStateScope = exports.OrderStateScope || (exports.OrderStateScope = {}));
class OrderConcreteState {
    constructor(scope, value) {
        this.scope = scope;
        this.value = value;
    }
    static find(scope, value) {
        return Array.from(OrderConcreteState.knownStates.values()).find(state => state.scope == scope && state.value == value);
    }
    static factory(value) {
        let that = this;
        OrderConcreteState.registerFactory(that);
        let key = OrderConcreteState.serialize({ scope: this.getScope(), value });
        if (OrderConcreteState.knownStates.has(key)) {
            return OrderConcreteState.knownStates.get(key);
        }
        let aaaState = new this(this.getScope(), value);
        OrderConcreteState.knownStates.set(key, aaaState);
        return aaaState;
    }
    static registerFactory(factory) {
        let scope = factory.getScope();
        if (!OrderConcreteState.knownScopedStatesFactories.has(scope)) {
            OrderConcreteState.knownScopedStatesFactories.set(scope, factory);
        }
    }
    static serialize(instance) {
        return instance.scope + '.' + instance.value;
    }
    static deserialize(serializedForm) {
        let [scope, value] = serializedForm.split('.');
        let stateFactory = OrderConcreteState.knownScopedStatesFactories.get(scope);
        return stateFactory.factory(value);
    }
}
exports.OrderConcreteState = OrderConcreteState;
OrderConcreteState.knownStates = new Map();
OrderConcreteState.knownScopedStatesFactories = new Map();
OrderConcreteState.getScope = () => {
    throw "Can't get type of generic aaa state";
};
class OrderPlacementState extends OrderConcreteState {
}
exports.OrderPlacementState = OrderPlacementState;
OrderPlacementState.getScope = () => OrderStateScope.Placement;
class OrderFinancialState extends OrderConcreteState {
}
exports.OrderFinancialState = OrderFinancialState;
OrderFinancialState.getScope = () => OrderStateScope.Financial;
class OrderPreparationState extends OrderConcreteState {
}
exports.OrderPreparationState = OrderPreparationState;
OrderPreparationState.getScope = () => OrderStateScope.Preparation;
class OrderDispatchState extends OrderConcreteState {
}
exports.OrderDispatchState = OrderDispatchState;
OrderDispatchState.getScope = () => OrderStateScope.Dispatch;
class OrderReturnState extends OrderConcreteState {
}
exports.OrderReturnState = OrderReturnState;
OrderReturnState.getScope = () => OrderStateScope.Return;
class OrderReplacementState extends OrderConcreteState {
}
exports.OrderReplacementState = OrderReplacementState;
OrderReplacementState.getScope = () => OrderStateScope.Replacement;
class OrderState {
    constructor(...states) {
        this.concreteStates = new Set(states);
    }
    getStates() {
        return Array.from(this.concreteStates);
    }
    getScopeStates(scope) {
        return Array.from(this.concreteStates).filter(value => value.scope == scope);
    }
    has(state) {
        return this.concreteStates.has(state);
    }
    hasAll(...states) {
        return states.every(state => this.has(state));
    }
    hasAny(...states) {
        return states.some(state => this.has(state));
    }
    hasScope(scope) {
        return !!this.getScopeStates(scope).length;
    }
    add(stateOrStates) {
        if (Array.isArray(stateOrStates)) {
            stateOrStates.forEach(value => this.add(value));
        }
        else {
            this.concreteStates.add(stateOrStates);
        }
        return this;
    }
    delete(state) {
        this.concreteStates.delete(state);
        return this;
    }
    setScopes(stateOrStates) {
        if (Array.isArray(stateOrStates)) {
            let differentScopes = new Set(stateOrStates.map(value => value.scope));
            differentScopes.forEach(scope => {
                this.clearScope(scope);
            });
        }
        else {
            this.clearScope(stateOrStates.scope);
        }
        this.add(stateOrStates);
        return this;
    }
    clearScope(scope) {
        this.getScopeStates(scope).forEach(this.delete.bind(this));
        return this;
    }
    clear() {
        this.concreteStates.clear();
        return this;
    }
    equals(anotherOrderState) {
        return _.isEqual(this.concreteStates, anotherOrderState.concreteStates);
    }
    static serialize(instance) {
        return instance.getStates().map(value => OrderConcreteState.serialize(value)).join(',');
    }
    static deserialize(serializedForm) {
        return new OrderState(...serializedForm
            .split(',')
            .map(value => OrderConcreteState.deserialize(value))
            .filter(Boolean));
    }
}
exports.default = OrderState;
OrderState.Placement = {
    Requested: OrderPlacementState.factory('requested'),
    Confirmed: OrderPlacementState.factory('confirmed'),
    Failed: OrderPlacementState.factory('failed'),
    Implicit: OrderPlacementState.factory('implicit'),
    Cancelled: OrderPlacementState.factory('cancelled'),
};
OrderState.Financial = {
    AwaitingPayment: OrderFinancialState.factory('awaiting_payment'),
    PaymentProcessing: OrderFinancialState.factory('payment_processing'),
    PaymentSuccessful: OrderFinancialState.factory('payment_successful'),
    PaymentError: OrderFinancialState.factory('payment_error'),
    PendingCashOnDelivery: OrderFinancialState.factory('pending_cash_on_delivery'),
    PaidCashOnDelivery: OrderFinancialState.factory('paid_cash_on_delivery'),
    RefundedPartial: OrderFinancialState.factory('refunded_partial'),
    RefundedFull: OrderFinancialState.factory('refunded_full'),
};
OrderState.Preparation = {
    Requested: OrderPreparationState.factory('requested'),
    Assigned: OrderPreparationState.factory('assigned'),
    Queued: OrderPreparationState.factory('queued'),
    Started: OrderPreparationState.factory('started'),
    Packed: OrderPreparationState.factory('packed'),
    Abandoned: OrderPreparationState.factory('abandoned'),
    Incidence: OrderPreparationState.factory('incidence'),
};
OrderState.Dispatch = {
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
OrderState.Return = {
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
OrderState.Replacement = {
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
//# sourceMappingURL=OrderState.js.map
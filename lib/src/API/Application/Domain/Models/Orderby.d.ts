export default class Orderby {
    private type;
    private sort;
    private order;
    constructor(object?: Object);
    setType(type: number): void;
    getType(): number;
    setOrder(order: string): void;
    getOrder(): string;
    getOrderForQuery(): 'ASC' | 'DESC';
    getSort(): string;
    setSort(value: string): void;
}

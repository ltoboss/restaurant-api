import { QueryRunner } from 'typeorm';
export default class QueryTransaction {
    private queryRunner;
    private connection;
    constructor();
    private createQueryRunner;
    getQueryRunner(): Promise<QueryRunner>;
}

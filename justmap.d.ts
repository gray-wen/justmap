import { ConnectionConfig, QueryResult } from 'pg';

export declare class JustMap {
    constructor(connectionConfig: ConnectionConfig);

    query(sql: string, values: any, callback: any): void;
    justQuery(sqlId: string, values: any, callback: any): void;
    destroy(callback: any): void;

    queryAsync(sql: string, values: any): Promise<QueryResult>;
    justQueryAsync(sqlId: string, values: any): Promise<QueryResult>;
    destroyAsync(): Promise<void>;

    static loadJustMapsAsync(path: string): Promise<void>;
    static emitSql(sqlId: string, paramObject: any): IEmitModel;
    static parse(input: string): any;
}

interface IEmitModel {
    func: string,
    sql: string,
    values: any
}
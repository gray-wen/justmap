import { ConnectionConfig } from 'pg';

export declare class JustMap {
    constructor(connectionConfig: ConnectionConfig);

    query(sql: string, values: any, callback: any): void;
    justQuery(sqlId: string, values: any, callback: any): void;

    queryAsync(sql: string, values: any): any;
    justQueryAsync(sqlId: string, values: any): void;

    static loadJustMapsAsync(path: string): void;
    static emitSql(sqlId: string, paramObject: any): any;
    static parse(input: string): any;
}
# justmap
just simple sql map.

> Only support PostgresSQL for now.

### SQL definition line

> [#select #insert, #update, #delete, #sql] SQLID:
>
> [#select,#insert, #update, #delete, #sql] SQLID { ... }

#### SQL ID

A SQLID is an identify for a SQL.

You should make sure your SQLID is unique for all SQL definitions.

### SQL body

#### Params

* @param or @@param

This stands for a parameter named "param". One '@' means the param is optional, two '@'s means the param is mandatory.

## Example

> Please refer the test/justMapTest.js.
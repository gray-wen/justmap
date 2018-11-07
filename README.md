# justmap
just simple postgreSQL map.

# SQL definition line

> [#select #insert, #update, #delete, #sql] SQLID:
>
> [#select,#insert, #update, #delete, #sql] SQLID { ... }

# SQL ID

A SQLID is an identify for a SQL.

You should make sure your SQLID is unique for all SQL definitions.

# SQL body

# Params

* @param or @@param

This stands for a parameter named "param". One '@' means the param is optional, two '@'s means the param is mandatory.

# if, for, foreach blocks

> Very like JavaScript code except you need replace the parameter as @param.

# Example

> Please refer the test/justMapTest.js.
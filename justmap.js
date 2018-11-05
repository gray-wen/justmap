const fs = require('fs');
const pg = require('pg');
const antlr4 = require('antlr4');
const { JustMapLexer } = require('./lib/parser/JustMapLexer');
const { JustMapParser } = require('./lib/parser/JustMapParser');
const { MyJustMapParserVisitor } = require('./lib/parser/MyJustMapParserVisitor');
const { JustMapLoader } = require('./lib/loader/JustMapLoader');
const { JustMapHelper } = require('./lib/parser/JustMapHelper');

function JustMap(connectionConfig) {
    this.debug = true;
    this.pool = new pg.Pool(connectionConfig);
}

function formatPostgresSql(sql) {
    let index = 1;
    let _sql = sql.replace(/\?/g, function () { return "$" + index++; });
    return _sql;
}

function querySql(justMap, sql, values, callback) {
    let startTime = new Date();
    sql = formatPostgresSql(sql);
    justMap.log(sql);
    justMap.pool.connect(function (error, client, done) {
        if (error) {
            if (callback) {
                callback(error);
            } else {
                throw error;
            }
        } else {
            client.query(sql, values, function (error, result) {
                done();
                if (error) throw error;
                let endTime = new Date();
                justMap.log('execute time:' + (endTime.getUTCMilliseconds() - startTime.getUTCMilliseconds()) + 'ms.');
                if (callback) {
                    callback(null, result);
                }
            });
        }
    });
}

// function querySqlAsync(justMap, sql, values) {
//     let startTime = new Date();
//     return new Promise(function (resolve, reject) {
//         let connect = await justMap.pool().connect();
//         try {
//             let result = await connect.query(sql, values);
//             justMap.log(sql);
//             let endTime = new Date();
//             justMap.log('execute time:' + (endTime.getUTCMilliseconds() - startTime.getUTCMilliseconds()) + 'ms.');
//             resolve(result);
//         }
//         catch (error) {
//             throw error;
//         }
//     });
// }

JustMap.parse = function (input) {
    var chars = new antlr4.InputStream(input);
    var lexer = new JustMapLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new JustMapParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.root();
    var visitor = new MyJustMapParserVisitor();
    visitor.visitRoot(tree);
}

JustMap.emitSql = function (sqlId, _params) {
    let _sqls = [];
    let _values = [];

    let func = JustMapHelper.getSqlFunction(sqlId);
    if (func) {
        func(_params, _sqls, _values);
        return {
            func: func.name,
            sql: _sqls.join(''),
            values: _values
        };
    }

    throw new Error('\'' + sqlId + '\' not found!');
}

JustMap.prototype.log = function (msg) {
    if (this.debug) {
        console.log(msg);
    }
}

JustMap.prototype.query = function (sql, values, callback) {
    if (typeof sql !== 'string') {
        throw new Error('Parameter \'sql\' requires a string!');
    }
    querySql(this, sql, values, callback);
}

JustMap.prototype.queryAsync = function (sql, values) {
    let self = this;
    return new Promise(function (resolve, reject) {
        self.query(sql, values, function (error, result) {
            if (error) reject(error);
            resolve(result);
        });
    });
}

JustMap.prototype.justQuery = function (sqlId, values, callback) {
    if (typeof sqlId !== 'string') {
        throw new Error('Parameter \'sql\' requires a string!');
    }

    let sql = JustMap.emitSql(sqlId, values);
    querySql(this, sql.sql, sql.values, callback);
}

JustMap.prototype.justQueryAsync = function (sqlId, values) {
    let self = this;
    return new Promise(function (resolve, reject) {
        self.justQuery(sqlId, values, function (error, result) {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

function _loadJustMap(path, callback) {
    let stat = fs.statSync(path);
    if (stat) {
        if (stat.isFile()) {
            JustMapLoader.loadJustMapFile(path, JustMap.parse, callback);
        }
        if (stat.isDirectory()) {
            JustMapLoader.loadJustMapDir(path, JustMap.parse, callback);
        }
    }
}

JustMap.loadJustMapsAsync = function (path) {
    return new Promise(function (resolve, reject) {
        _loadJustMap(path, function (error, result) {
            if (error) return reject(error);
            return resolve(result);
        })
    });
}


module.exports.JustMap = JustMap;
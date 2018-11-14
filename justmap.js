const fs = require('fs');
const pg = require('pg');
const antlr4 = require('antlr4');
const { JustMapLexer } = require('./lib/parser/JustMapLexer');
const { JustMapParser } = require('./lib/parser/JustMapParser');
const { MyJustMapParserVisitor } = require('./lib/parser/MyJustMapParserVisitor');
const { JustMapLoader } = require('./lib/loader/JustMapLoader');
const { JustMapHelper } = require('./lib/parser/JustMapHelper');

function JustMap(connectionConfig) {
    this.debug = false;
    this.pool = new pg.Pool(connectionConfig);
}

function formatPostgresSql(sql) {
    var index = 1;
    var _sql = sql.replace(/\?/g, function () { return "$" + index++; });
    return _sql;
}

function querySql(justMap, sql, values, callback) {
    var startTime = new Date();
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
                if (error) throw error;
                var endTime = new Date();
                done();
                justMap.log('execute time:' + (endTime.getUTCMilliseconds() - startTime.getUTCMilliseconds()) + 'ms.');
                if (callback) {
                    callback(null, result);
                }
            });
        }
    });
}

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
    var _sqls = [], _values = [];

    var func = JustMapHelper.getSqlFunction(sqlId);
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
    var self = this;
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

    var sql = JustMap.emitSql(sqlId, values);
    querySql(this, sql.sql, sql.values, callback);
}

JustMap.prototype.justQueryAsync = function (sqlId, values) {
    var self = this;
    return new Promise(function (resolve, reject) {
        self.justQuery(sqlId, values, function (error, result) {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

function _loadJustMap(path, callback) {
    var stat = fs.statSync(path);
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

JustMap.prototype.destroy = function (callback) {
    this.pool.end(callback);
}

JustMap.prototype.destroyAsync = function () {
    var self = this;
    return new Promise(function (resolve, reject) {
        self.destroy(function (err, result) {
            if (err) return reject(err);
            return resolve(result);
        });
    });
}

module.exports.JustMap = JustMap;
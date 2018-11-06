function JustMapHelper() {

}

JustMapHelper.getSqlFunctionName = function (sqlTypeName, sqlId) {
    return sqlTypeName + '_' + sqlId.replace(/\./g, '_dot_');
}

JustMapHelper.getSqlFunction = function (sqlId) {
    var sqlTypeNames = ['select', 'insert', 'update', 'delete', 'sql'];
    for (var i = 0; i < sqlTypeNames.length; i++) {
        let funcName = JustMapHelper.getSqlFunctionName(sqlTypeNames[i], sqlId);
        let func = global.justMap[funcName];
        if (func) return func;
    }
    return null;
}

JustMapHelper.indent = function (tabIndex) {
    return '    '.repeat(tabIndex);
}

JustMapHelper.generateOpenBrace = function () {
    return '{\n';
}

JustMapHelper.generateCloseBrace = function (tabIndex) {
    return JustMapHelper.indent(tabIndex) + '}\n';
}

JustMapHelper.replaceParam = function (text) {
    return text.replace(/[@$]$/, '').replace(/@@?/g, '_params.');
}

JustMapHelper.getParamText = function (text) {
    return text.match(/[@$]$/) ? '??' : '?';
}

JustMapHelper.processTextNodeString = function (text, _sqls) {
    if (!text.match(/^\s*$/)) _sqls.push(text);
}

JustMapHelper.processParamNodeString = function (text, _params, _sqls, _values) {
    _sqls.push(text);
    _values.push(_params);
}

JustMapHelper.processIncludeNodeString = function (sqlId, _params, _sqls, _values) {
    var func = JustMapHelper.getSqlFunction(sqlId);
    if (func) func(_params, _sqls, _values);
    else throw new Error('\'' + sqlId + '\' not found!');
}

JustMapHelper.generateSqlLineDeclare = function (paramNames, tabIndex) {
    var b = paramNames.length === 0;
    for (var i = 0; i < paramNames.length; i++) {
        if (paramNames[i].match(/(@@)|(\$\$)/)) {
            b = true;
            break;
        }
    }
    if (b) return '';
    var arr = [];
    for (var i = 0; i < paramNames.length; i++) {
        arr.push(JustMapHelper.replaceParam(paramNames[i]));
    }
    return JustMapHelper.indent(tabIndex) +
        'if (' + arr.join(' || ') + ') ';
}

JustMapHelper.generateTextNodeCall = function (text, tabIndex) {
    return JustMapHelper.indent(tabIndex) +
        'JustMapHelper.processTextNodeString(\"' +
        text.trim() + ' \", _sqls);\n';
}

JustMapHelper.generateParamNodeCall = function (text, tabIndex) {
    return JustMapHelper.indent(tabIndex) +
        'JustMapHelper.processParamNodeString(\'' +
        JustMapHelper.getParamText(text) + ' \', ' +
        JustMapHelper.replaceParam(text) +
        ', _sqls, _values);\n';
}

JustMapHelper.generateIncludeNodeCall = function (sqlId, tabIndex) {
    return JustMapHelper.indent(tabIndex) +
        'JustMapHelper.processIncludeNodeString(\'' + sqlId +
        '\', _params, _sqls, _values);\n';
}

JustMapHelper.generateIfDeclare = function (text, tabIndex) {
    return JustMapHelper.indent(tabIndex) +
        'if (' + JustMapHelper.replaceParam(text) + ') ';
}

JustMapHelper.generateForDeclare = function (text, tabIndex) {
    return JustMapHelper.indent(tabIndex) +
        'for (' + JustMapHelper.replaceParam(text) + ') ';
}

JustMapHelper.generateFunctionDeclare = function (sqlTypeName, sqlId) {
    return 'global.justMap.' +
        JustMapHelper.getSqlFunctionName(sqlTypeName, sqlId) +
        ' = function (_params, _sqls, _values) ';
}

global.justMap = {};

exports.JustMapHelper = JustMapHelper;
const { JustMapParserVisitor } = require('./JustMapParserVisitor');
const { JustMapParser } = require('./JustMapParser');
const { JustMapHelper } = require('./JustMapHelper');

function MyJustMapParserVisitor() {
    JustMapParserVisitor.call(this);

    this.isColonDeclare = false;
    this.sql = '';
    this.sqlTypeName = '';
    this.sqlId = '';
    this.nodeType = '';
    this.blockStack = [];
    this.hasLineEnd = true;
    this.tabIndex = 0;
    return this;
}

MyJustMapParserVisitor.prototype = Object.create(JustMapParserVisitor.prototype);
MyJustMapParserVisitor.prototype.constructor = MyJustMapParserVisitor;

MyJustMapParserVisitor.prototype.init = function () {
    this.isColonDeclare = false;
    this.sql = '';
    this.sqlTypeName = '';
    this.sqlId = '';
    this.nodeType = '';
    this.blockStack = [];
    this.hasLineEnd = true;
    this.tabIndex = 0;
    return this;
}

MyJustMapParserVisitor.prototype.currentBlock = function () {
    return this.blockStack.length > 0 ? this.blockStack[this.blockStack.length - 1] : null;
}

MyJustMapParserVisitor.prototype.evalSqlFunctionDeclare = function () {
    if (this.sql) {
        eval(this.sql);
        this.sql = '';
    }
}

// Visit a parse tree produced by JustMapParser#root.
MyJustMapParserVisitor.prototype.visitRoot = function (ctx) {
    let ret = this.visitChildren(ctx);
    if (this.isColonDeclare) {
        this.tabIndex -= 1;
        this.sql += JustMapHelper.generateCloseBrace(this.tabIndex);
    }
    this.evalSqlFunctionDeclare();
    return ret;
};


// Visit a parse tree produced by JustMapParser#sqlStatement.
MyJustMapParserVisitor.prototype.visitSqlStatement = function (ctx) {
    if (this.isColonDeclare) {
        this.tabIndex -= 1;
        this.sql += JustMapHelper.generateCloseBrace(this.tabIndex);
    }
    this.evalSqlFunctionDeclare();
    this.init();
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#sqlDeclare.
MyJustMapParserVisitor.prototype.visitSqlDeclare = function (ctx) {
    this.sqlTypeName = ctx.children[0].symbol.text.substring(1);
    this.blockStack.push('sql');
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#sqlBody.
MyJustMapParserVisitor.prototype.visitSqlBody = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#sqlLine.
MyJustMapParserVisitor.prototype.visitSqlLine = function (ctx) {
    let params = [], blankFlags = [], hasContent = false, paramIndex = 0;
    for (var i = 0; i < ctx.children.length; i++) {
        var context = ctx.children[i];

        var m = context.children[0].symbol.text.match(/^\s+$/);
        blankFlags.push(m);
        hasContent = hasContent || !m;

        if (context instanceof JustMapParser.ParamContext) {
            params.push(context.children[0].symbol.text);
        }
    }

    if (!hasContent) return;

    var declare = JustMapHelper.generateSqlLineDeclare(params, this.tabIndex);
    if (declare) {
        this.sql += declare;
        this.sql += JustMapHelper.generateOpenBrace();
        this.tabIndex++;
        this.blockStack.push('line');
    }
    /* eslint-disable */
    for (var i = 0; i < ctx.children.length; i++) {
        var context = ctx.children[i];
        /* eslint-enable */
        if (!blankFlags[i]) {
            if (context instanceof JustMapParser.PlainTextContext) {
                this.sql += JustMapHelper.generateTextNodeCall(context.children[0].symbol.text, this.tabIndex);
            } else if (context instanceof JustMapParser.ParamContext) {
                console.log(context.children[0].symbol.text, this.tabIndex);
                this.sql += JustMapHelper.generateParamNodeCall(context.children[0].symbol.text, this.tabIndex);
            }
        }
    }
    if (declare) {
        this.blockStack.pop();
        this.tabIndex--;
        this.sql += JustMapHelper.generateCloseBrace(this.tabIndex);
    }
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#ifStatement.
MyJustMapParserVisitor.prototype.visitIfStatement = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#ifDeclare.
MyJustMapParserVisitor.prototype.visitIfDeclare = function (ctx) {
    this.blockStack.push('if');
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#forStatement.
MyJustMapParserVisitor.prototype.visitForStatement = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#forDeclare.
MyJustMapParserVisitor.prototype.visitForDeclare = function (ctx) {
    this.blockStack.push('for');
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#foreachStatement.
MyJustMapParserVisitor.prototype.visitForeachStatement = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#foreachDeclare.
MyJustMapParserVisitor.prototype.visitForeachDeclare = function (ctx) {
    this.blockStack.push('foreach');
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#inExpr.
MyJustMapParserVisitor.prototype.visitInExpr = function (ctx) {
    if (ctx.parentCtx instanceof JustMapParser.ForDeclareContext) {
        var text = ctx.start.source[1].strdata.substring(ctx.start.start, ctx.stop.stop + 1);
        this.sql += JustMapHelper.generateForDeclare(text, this.tabIndex);
    }
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#indexExpr.
MyJustMapParserVisitor.prototype.visitIndexExpr = function (ctx) {
    if (ctx.parentCtx instanceof JustMapParser.ForDeclareContext) {
        var text = ctx.start.source[1].strdata.substring(ctx.start.start, ctx.stop.stop + 1);
        this.sql += JustMapHelper.generateForDeclare(text, this.tabIndex);
    }
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#expr.
MyJustMapParserVisitor.prototype.visitExpr = function (ctx) {
    if (ctx.parentCtx instanceof JustMapParser.IfDeclareContext) {
        var text = ctx.start.source[1].strdata.substring(ctx.start.start, ctx.stop.stop + 1);
        this.sql += JustMapHelper.generateIfDeclare(text, this.tabIndex);
    }
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#includeStatement.
MyJustMapParserVisitor.prototype.visitIncludeStatement = function (ctx) {
    this.blockStack.push('include');
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#colon.
MyJustMapParserVisitor.prototype.visitColon = function (ctx) {
    this.isColonDeclare = true;
    this.sql += JustMapHelper.generateOpenBrace();
    this.tabIndex++;
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#openBrace.
MyJustMapParserVisitor.prototype.visitOpenBrace = function (ctx) {
    this.sql += JustMapHelper.generateOpenBrace();
    this.tabIndex++;
    if (this.currentBlock() === 'for') {

    }
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#closeBrace.
MyJustMapParserVisitor.prototype.visitCloseBrace = function (ctx) {
    this.tabIndex--;
    this.sql += JustMapHelper.generateCloseBrace(this.tabIndex);
    if (this.currentBlock() === 'sql') {
        this.evalSqlFunctionDeclare();
    }
    this.blockStack.pop();
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#openParen.
MyJustMapParserVisitor.prototype.visitOpenParen = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#closeParen.
MyJustMapParserVisitor.prototype.visitCloseParen = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#sqlId.
MyJustMapParserVisitor.prototype.visitSqlId = function (ctx) {
    if (this.currentBlock() === 'sql') {
        this.sqlId = ctx.children[0].symbol.text;
        this.sql += JustMapHelper.generateFunctionDeclare(this.sqlTypeName, this.sqlId);
    } else if (this.currentBlock() === 'include') {
        var sqlId = ctx.children[0].symbol.text;
        this.sql += JustMapHelper.generateIncludeNodeCall(sqlId, this.tabIndex);
        this.blockStack.pop();
    }
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#param.
MyJustMapParserVisitor.prototype.visitParam = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#plainText.
MyJustMapParserVisitor.prototype.visitPlainText = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#nl.
MyJustMapParserVisitor.prototype.visitNl = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#eof.
MyJustMapParserVisitor.prototype.visitEof = function (ctx) {
    if (this.isColonDeclare) {
        this.tabIndex--;
        this.sql += JustMapHelper.generateCloseBrace(this.tabIndex);
    }
    console.log(this.sql);
    return this.visitChildren(ctx);
};

exports.MyJustMapParserVisitor = MyJustMapParserVisitor;
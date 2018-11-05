// Generated from D:\Code\github\justmap\lib\parser\JustMapParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by JustMapParser.

function JustMapParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

JustMapParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
JustMapParserVisitor.prototype.constructor = JustMapParserVisitor;

// Visit a parse tree produced by JustMapParser#root.
JustMapParserVisitor.prototype.visitRoot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#sqlStatement.
JustMapParserVisitor.prototype.visitSqlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#sqlDeclare.
JustMapParserVisitor.prototype.visitSqlDeclare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#sqlBody.
JustMapParserVisitor.prototype.visitSqlBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#sqlLine.
JustMapParserVisitor.prototype.visitSqlLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#ifStatement.
JustMapParserVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#ifDeclare.
JustMapParserVisitor.prototype.visitIfDeclare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#forStatement.
JustMapParserVisitor.prototype.visitForStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#forDeclare.
JustMapParserVisitor.prototype.visitForDeclare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#foreachStatement.
JustMapParserVisitor.prototype.visitForeachStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#foreachDeclare.
JustMapParserVisitor.prototype.visitForeachDeclare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#inExpr.
JustMapParserVisitor.prototype.visitInExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#indexExpr.
JustMapParserVisitor.prototype.visitIndexExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#expr.
JustMapParserVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#includeStatement.
JustMapParserVisitor.prototype.visitIncludeStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#colon.
JustMapParserVisitor.prototype.visitColon = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#openBrace.
JustMapParserVisitor.prototype.visitOpenBrace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#closeBrace.
JustMapParserVisitor.prototype.visitCloseBrace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#openParen.
JustMapParserVisitor.prototype.visitOpenParen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#closeParen.
JustMapParserVisitor.prototype.visitCloseParen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#sqlId.
JustMapParserVisitor.prototype.visitSqlId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#param.
JustMapParserVisitor.prototype.visitParam = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#plainText.
JustMapParserVisitor.prototype.visitPlainText = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#nl.
JustMapParserVisitor.prototype.visitNl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JustMapParser#eof.
JustMapParserVisitor.prototype.visitEof = function(ctx) {
  return this.visitChildren(ctx);
};



exports.JustMapParserVisitor = JustMapParserVisitor;
// Generated from D:\Code\github\justmap\lib\parser\JustMapParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var JustMapParserListener = require('./JustMapParserListener').JustMapParserListener;
var JustMapParserVisitor = require('./JustMapParserVisitor').JustMapParserVisitor;

var grammarFileName = "JustMapParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\'\u00da\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0003\u0002\u0007",
    "\u00026\n\u0002\f\u0002\u000e\u00029\u000b\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003D\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005",
    "N\n\u0005\r\u0005\u000e\u0005O\u0003\u0006\u0003\u0006\u0007\u0006T",
    "\n\u0006\f\u0006\u000e\u0006W\u000b\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0006\u0006\\\n\u0006\r\u0006\u000e\u0006]\u0003\u0006\u0005",
    "\u0006a\n\u0006\u0005\u0006c\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0005\u000e\u008a\n\u000e\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u008e\n\u000e\u0003\u000e\u0003\u000e\u0005\u000e",
    "\u0092\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0006\u000f\u009a\n\u000f\r\u000f\u000e\u000f\u009b",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u00a6\n\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0007\u000f\u00bc\n\u000f\f\u000f\u000e\u000f\u00bf\u000b\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0002\u0003\u001c\u001b\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.",
    "02\u0002\u0005\u0004\u0002\u0003\u0003\u001f\u001f\u0003\u0002\u000e",
    "\u000f\u0004\u0002\u0004\u0004##\u0002\u00df\u00027\u0003\u0002\u0002",
    "\u0002\u0004C\u0003\u0002\u0002\u0002\u0006E\u0003\u0002\u0002\u0002",
    "\bM\u0003\u0002\u0002\u0002\nb\u0003\u0002\u0002\u0002\fd\u0003\u0002",
    "\u0002\u0002\u000ei\u0003\u0002\u0002\u0002\u0010n\u0003\u0002\u0002",
    "\u0002\u0012s\u0003\u0002\u0002\u0002\u0014x\u0003\u0002\u0002\u0002",
    "\u0016}\u0003\u0002\u0002\u0002\u0018\u0082\u0003\u0002\u0002\u0002",
    "\u001a\u0089\u0003\u0002\u0002\u0002\u001c\u00a5\u0003\u0002\u0002\u0002",
    "\u001e\u00c0\u0003\u0002\u0002\u0002 \u00c5\u0003\u0002\u0002\u0002",
    "\"\u00c7\u0003\u0002\u0002\u0002$\u00c9\u0003\u0002\u0002\u0002&\u00cb",
    "\u0003\u0002\u0002\u0002(\u00cd\u0003\u0002\u0002\u0002*\u00cf\u0003",
    "\u0002\u0002\u0002,\u00d1\u0003\u0002\u0002\u0002.\u00d3\u0003\u0002",
    "\u0002\u00020\u00d5\u0003\u0002\u0002\u00022\u00d7\u0003\u0002\u0002",
    "\u000246\u0005\u0004\u0003\u000254\u0003\u0002\u0002\u000269\u0003\u0002",
    "\u0002\u000275\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u00028\u0003",
    "\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002:;\u0005\u0006\u0004",
    "\u0002;<\u0005 \u0011\u0002<=\u0005\b\u0005\u0002=D\u0003\u0002\u0002",
    "\u0002>?\u0005\u0006\u0004\u0002?@\u0005\"\u0012\u0002@A\u0005\b\u0005",
    "\u0002AB\u0005$\u0013\u0002BD\u0003\u0002\u0002\u0002C:\u0003\u0002",
    "\u0002\u0002C>\u0003\u0002\u0002\u0002D\u0005\u0003\u0002\u0002\u0002",
    "EF\t\u0002\u0002\u0002FG\u0005*\u0016\u0002G\u0007\u0003\u0002\u0002",
    "\u0002HN\u0005\f\u0007\u0002IN\u0005\u0010\t\u0002JN\u0005\u0014\u000b",
    "\u0002KN\u0005\u001e\u0010\u0002LN\u0005\n\u0006\u0002MH\u0003\u0002",
    "\u0002\u0002MI\u0003\u0002\u0002\u0002MJ\u0003\u0002\u0002\u0002MK\u0003",
    "\u0002\u0002\u0002ML\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002",
    "OM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002P\t\u0003\u0002",
    "\u0002\u0002QT\u0005.\u0018\u0002RT\u0005,\u0017\u0002SQ\u0003\u0002",
    "\u0002\u0002SR\u0003\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002US\u0003",
    "\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VX\u0003\u0002\u0002\u0002",
    "WU\u0003\u0002\u0002\u0002Xc\u00050\u0019\u0002Y\\\u0005.\u0018\u0002",
    "Z\\\u0005,\u0017\u0002[Y\u0003\u0002\u0002\u0002[Z\u0003\u0002\u0002",
    "\u0002\\]\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002]^\u0003",
    "\u0002\u0002\u0002^`\u0003\u0002\u0002\u0002_a\u00050\u0019\u0002`_",
    "\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ac\u0003\u0002\u0002",
    "\u0002bU\u0003\u0002\u0002\u0002b[\u0003\u0002\u0002\u0002c\u000b\u0003",
    "\u0002\u0002\u0002de\u0005\u000e\b\u0002ef\u0005\"\u0012\u0002fg\u0005",
    "\b\u0005\u0002gh\u0005$\u0013\u0002h\r\u0003\u0002\u0002\u0002ij\u0007",
    " \u0002\u0002jk\u0005&\u0014\u0002kl\u0005\u001c\u000f\u0002lm\u0005",
    "(\u0015\u0002m\u000f\u0003\u0002\u0002\u0002no\u0005\u0012\n\u0002o",
    "p\u0005\"\u0012\u0002pq\u0005\b\u0005\u0002qr\u0005$\u0013\u0002r\u0011",
    "\u0003\u0002\u0002\u0002st\u0007!\u0002\u0002tu\u0005&\u0014\u0002u",
    "v\u0005\u001a\u000e\u0002vw\u0005(\u0015\u0002w\u0013\u0003\u0002\u0002",
    "\u0002xy\u0005\u0016\f\u0002yz\u0005\"\u0012\u0002z{\u0005\b\u0005\u0002",
    "{|\u0005$\u0013\u0002|\u0015\u0003\u0002\u0002\u0002}~\u0007\"\u0002",
    "\u0002~\u007f\u0005&\u0014\u0002\u007f\u0080\u0005\u0018\r\u0002\u0080",
    "\u0081\u0005(\u0015\u0002\u0081\u0017\u0003\u0002\u0002\u0002\u0082",
    "\u0083\u0007\r\u0002\u0002\u0083\u0084\u0005\u001c\u000f\u0002\u0084",
    "\u0085\u0007\t\u0002\u0002\u0085\u0086\u0005\u001c\u000f\u0002\u0086",
    "\u0019\u0003\u0002\u0002\u0002\u0087\u0088\u0007\r\u0002\u0002\u0088",
    "\u008a\u0005\u001c\u000f\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u0089",
    "\u008a\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b",
    "\u008d\u0007\u0017\u0002\u0002\u008c\u008e\u0005\u001c\u000f\u0002\u008d",
    "\u008c\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e",
    "\u008f\u0003\u0002\u0002\u0002\u008f\u0091\u0007\u0017\u0002\u0002\u0090",
    "\u0092\u0005\u001c\u000f\u0002\u0091\u0090\u0003\u0002\u0002\u0002\u0091",
    "\u0092\u0003\u0002\u0002\u0002\u0092\u001b\u0003\u0002\u0002\u0002\u0093",
    "\u0094\b\u000f\u0001\u0002\u0094\u0095\u0007\u0007\u0002\u0002\u0095",
    "\u0096\u0005\u001c\u000f\u0002\u0096\u0097\u0007\b\u0002\u0002\u0097",
    "\u00a6\u0003\u0002\u0002\u0002\u0098\u009a\u0007\u0016\u0002\u0002\u0099",
    "\u0098\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b",
    "\u0099\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002\u009c",
    "\u009d\u0003\u0002\u0002\u0002\u009d\u00a6\u0005\u001c\u000f\u0010\u009e",
    "\u009f\t\u0003\u0002\u0002\u009f\u00a6\u0005\u001c\u000f\r\u00a0\u00a6",
    "\u0007\u000b\u0002\u0002\u00a1\u00a6\u0007\f\u0002\u0002\u00a2\u00a6",
    "\u0007\n\u0002\u0002\u00a3\u00a6\u0007\u001b\u0002\u0002\u00a4\u00a6",
    "\u0007\u001a\u0002\u0002\u00a5\u0093\u0003\u0002\u0002\u0002\u00a5\u0099",
    "\u0003\u0002\u0002\u0002\u00a5\u009e\u0003\u0002\u0002\u0002\u00a5\u00a0",
    "\u0003\u0002\u0002\u0002\u00a5\u00a1\u0003\u0002\u0002\u0002\u00a5\u00a2",
    "\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a4",
    "\u0003\u0002\u0002\u0002\u00a6\u00bd\u0003\u0002\u0002\u0002\u00a7\u00a8",
    "\f\u000f\u0002\u0002\u00a8\u00a9\u0007\u0010\u0002\u0002\u00a9\u00bc",
    "\u0005\u001c\u000f\u0010\u00aa\u00ab\f\u000e\u0002\u0002\u00ab\u00ac",
    "\u0007\u0011\u0002\u0002\u00ac\u00bc\u0005\u001c\u000f\u000f\u00ad\u00ae",
    "\f\u000b\u0002\u0002\u00ae\u00af\u0007\u0013\u0002\u0002\u00af\u00bc",
    "\u0005\u001c\u000f\f\u00b0\u00b1\f\n\u0002\u0002\u00b1\u00b2\u0007\u0014",
    "\u0002\u0002\u00b2\u00bc\u0005\u001c\u000f\u000b\u00b3\u00b4\f\t\u0002",
    "\u0002\u00b4\u00b5\u0007\u0015\u0002\u0002\u00b5\u00bc\u0005\u001c\u000f",
    "\n\u00b6\u00b7\f\b\u0002\u0002\u00b7\u00b8\u0007\u0012\u0002\u0002\u00b8",
    "\u00bc\u0005\u001c\u000f\t\u00b9\u00ba\f\f\u0002\u0002\u00ba\u00bc\t",
    "\u0003\u0002\u0002\u00bb\u00a7\u0003\u0002\u0002\u0002\u00bb\u00aa\u0003",
    "\u0002\u0002\u0002\u00bb\u00ad\u0003\u0002\u0002\u0002\u00bb\u00b0\u0003",
    "\u0002\u0002\u0002\u00bb\u00b3\u0003\u0002\u0002\u0002\u00bb\u00b6\u0003",
    "\u0002\u0002\u0002\u00bb\u00b9\u0003\u0002\u0002\u0002\u00bc\u00bf\u0003",
    "\u0002\u0002\u0002\u00bd\u00bb\u0003\u0002\u0002\u0002\u00bd\u00be\u0003",
    "\u0002\u0002\u0002\u00be\u001d\u0003\u0002\u0002\u0002\u00bf\u00bd\u0003",
    "\u0002\u0002\u0002\u00c0\u00c1\t\u0004\u0002\u0002\u00c1\u00c2\u0005",
    "&\u0014\u0002\u00c2\u00c3\u0005*\u0016\u0002\u00c3\u00c4\u0005(\u0015",
    "\u0002\u00c4\u001f\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007\u0005\u0002",
    "\u0002\u00c6!\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007\u0006\u0002",
    "\u0002\u00c8#\u0003\u0002\u0002\u0002\u00c9\u00ca\u0007$\u0002\u0002",
    "\u00ca%\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007\u0007\u0002\u0002",
    "\u00cc\'\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007\b\u0002\u0002\u00ce",
    ")\u0003\u0002\u0002\u0002\u00cf\u00d0\u0007\u001a\u0002\u0002\u00d0",
    "+\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007%\u0002\u0002\u00d2-\u0003",
    "\u0002\u0002\u0002\u00d3\u00d4\u0007\'\u0002\u0002\u00d4/\u0003\u0002",
    "\u0002\u0002\u00d5\u00d6\u0007&\u0002\u0002\u00d61\u0003\u0002\u0002",
    "\u0002\u00d7\u00d8\u0007\u0002\u0002\u0003\u00d83\u0003\u0002\u0002",
    "\u0002\u00137CMOSU[]`b\u0089\u008d\u0091\u009b\u00a5\u00bb\u00bd"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "':'", "'{'", "'('", "')'", "'in'", 
                     null, null, null, "'var'", "'++'", "'--'", null, null, 
                     "'='", null, null, null, "'!'", "';'", null, null, 
                     null, null, null, null, null, null, "'#if'", "'#for'", 
                     "'#foreach'", null, "'}'" ];

var symbolicNames = [ null, "HashSql", "HashInclude", "COLON", "OpenBrace", 
                      "OpenParen", "CloseParen", "IN", "BOOL", "STR", "NUM", 
                      "VAR", "INC", "DEC", "MULDIV", "ADDSUB", "EQUAL", 
                      "CMP", "AND", "OR", "NOT", "SEMICOLON", "BlockComment", 
                      "LineComment", "SqlId", "ID", "IDX", "SYNTAX", "WS", 
                      "HashSql0", "HashIf", "HashFor", "HashForeach", "HashInclude0", 
                      "CloseBrace", "Param", "NL", "TEXT" ];

var ruleNames =  [ "root", "sqlStatement", "sqlDeclare", "sqlBody", "sqlLine", 
                   "ifStatement", "ifDeclare", "forStatement", "forDeclare", 
                   "foreachStatement", "foreachDeclare", "inExpr", "indexExpr", 
                   "expr", "includeStatement", "colon", "openBrace", "closeBrace", 
                   "openParen", "closeParen", "sqlId", "param", "plainText", 
                   "nl", "eof" ];

function JustMapParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

JustMapParser.prototype = Object.create(antlr4.Parser.prototype);
JustMapParser.prototype.constructor = JustMapParser;

Object.defineProperty(JustMapParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

JustMapParser.EOF = antlr4.Token.EOF;
JustMapParser.HashSql = 1;
JustMapParser.HashInclude = 2;
JustMapParser.COLON = 3;
JustMapParser.OpenBrace = 4;
JustMapParser.OpenParen = 5;
JustMapParser.CloseParen = 6;
JustMapParser.IN = 7;
JustMapParser.BOOL = 8;
JustMapParser.STR = 9;
JustMapParser.NUM = 10;
JustMapParser.VAR = 11;
JustMapParser.INC = 12;
JustMapParser.DEC = 13;
JustMapParser.MULDIV = 14;
JustMapParser.ADDSUB = 15;
JustMapParser.EQUAL = 16;
JustMapParser.CMP = 17;
JustMapParser.AND = 18;
JustMapParser.OR = 19;
JustMapParser.NOT = 20;
JustMapParser.SEMICOLON = 21;
JustMapParser.BlockComment = 22;
JustMapParser.LineComment = 23;
JustMapParser.SqlId = 24;
JustMapParser.ID = 25;
JustMapParser.IDX = 26;
JustMapParser.SYNTAX = 27;
JustMapParser.WS = 28;
JustMapParser.HashSql0 = 29;
JustMapParser.HashIf = 30;
JustMapParser.HashFor = 31;
JustMapParser.HashForeach = 32;
JustMapParser.HashInclude0 = 33;
JustMapParser.CloseBrace = 34;
JustMapParser.Param = 35;
JustMapParser.NL = 36;
JustMapParser.TEXT = 37;

JustMapParser.RULE_root = 0;
JustMapParser.RULE_sqlStatement = 1;
JustMapParser.RULE_sqlDeclare = 2;
JustMapParser.RULE_sqlBody = 3;
JustMapParser.RULE_sqlLine = 4;
JustMapParser.RULE_ifStatement = 5;
JustMapParser.RULE_ifDeclare = 6;
JustMapParser.RULE_forStatement = 7;
JustMapParser.RULE_forDeclare = 8;
JustMapParser.RULE_foreachStatement = 9;
JustMapParser.RULE_foreachDeclare = 10;
JustMapParser.RULE_inExpr = 11;
JustMapParser.RULE_indexExpr = 12;
JustMapParser.RULE_expr = 13;
JustMapParser.RULE_includeStatement = 14;
JustMapParser.RULE_colon = 15;
JustMapParser.RULE_openBrace = 16;
JustMapParser.RULE_closeBrace = 17;
JustMapParser.RULE_openParen = 18;
JustMapParser.RULE_closeParen = 19;
JustMapParser.RULE_sqlId = 20;
JustMapParser.RULE_param = 21;
JustMapParser.RULE_plainText = 22;
JustMapParser.RULE_nl = 23;
JustMapParser.RULE_eof = 24;

function RootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_root;
    return this;
}

RootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RootContext.prototype.constructor = RootContext;

RootContext.prototype.sqlStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SqlStatementContext);
    } else {
        return this.getTypedRuleContext(SqlStatementContext,i);
    }
};

RootContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterRoot(this);
	}
};

RootContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitRoot(this);
	}
};

RootContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitRoot(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.RootContext = RootContext;

JustMapParser.prototype.root = function() {

    var localctx = new RootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, JustMapParser.RULE_root);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===JustMapParser.HashSql || _la===JustMapParser.HashSql0) {
            this.state = 50;
            this.sqlStatement();
            this.state = 55;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SqlStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_sqlStatement;
    return this;
}

SqlStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SqlStatementContext.prototype.constructor = SqlStatementContext;

SqlStatementContext.prototype.sqlDeclare = function() {
    return this.getTypedRuleContext(SqlDeclareContext,0);
};

SqlStatementContext.prototype.colon = function() {
    return this.getTypedRuleContext(ColonContext,0);
};

SqlStatementContext.prototype.sqlBody = function() {
    return this.getTypedRuleContext(SqlBodyContext,0);
};

SqlStatementContext.prototype.openBrace = function() {
    return this.getTypedRuleContext(OpenBraceContext,0);
};

SqlStatementContext.prototype.closeBrace = function() {
    return this.getTypedRuleContext(CloseBraceContext,0);
};

SqlStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterSqlStatement(this);
	}
};

SqlStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitSqlStatement(this);
	}
};

SqlStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitSqlStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.SqlStatementContext = SqlStatementContext;

JustMapParser.prototype.sqlStatement = function() {

    var localctx = new SqlStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, JustMapParser.RULE_sqlStatement);
    try {
        this.state = 65;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 56;
            this.sqlDeclare();
            this.state = 57;
            this.colon();
            this.state = 58;
            this.sqlBody();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 60;
            this.sqlDeclare();
            this.state = 61;
            this.openBrace();
            this.state = 62;
            this.sqlBody();
            this.state = 63;
            this.closeBrace();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SqlDeclareContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_sqlDeclare;
    return this;
}

SqlDeclareContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SqlDeclareContext.prototype.constructor = SqlDeclareContext;

SqlDeclareContext.prototype.sqlId = function() {
    return this.getTypedRuleContext(SqlIdContext,0);
};

SqlDeclareContext.prototype.HashSql = function() {
    return this.getToken(JustMapParser.HashSql, 0);
};

SqlDeclareContext.prototype.HashSql0 = function() {
    return this.getToken(JustMapParser.HashSql0, 0);
};

SqlDeclareContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterSqlDeclare(this);
	}
};

SqlDeclareContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitSqlDeclare(this);
	}
};

SqlDeclareContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitSqlDeclare(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.SqlDeclareContext = SqlDeclareContext;

JustMapParser.prototype.sqlDeclare = function() {

    var localctx = new SqlDeclareContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, JustMapParser.RULE_sqlDeclare);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        _la = this._input.LA(1);
        if(!(_la===JustMapParser.HashSql || _la===JustMapParser.HashSql0)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 68;
        this.sqlId();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SqlBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_sqlBody;
    return this;
}

SqlBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SqlBodyContext.prototype.constructor = SqlBodyContext;

SqlBodyContext.prototype.ifStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IfStatementContext);
    } else {
        return this.getTypedRuleContext(IfStatementContext,i);
    }
};

SqlBodyContext.prototype.forStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ForStatementContext);
    } else {
        return this.getTypedRuleContext(ForStatementContext,i);
    }
};

SqlBodyContext.prototype.foreachStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ForeachStatementContext);
    } else {
        return this.getTypedRuleContext(ForeachStatementContext,i);
    }
};

SqlBodyContext.prototype.includeStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IncludeStatementContext);
    } else {
        return this.getTypedRuleContext(IncludeStatementContext,i);
    }
};

SqlBodyContext.prototype.sqlLine = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SqlLineContext);
    } else {
        return this.getTypedRuleContext(SqlLineContext,i);
    }
};

SqlBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterSqlBody(this);
	}
};

SqlBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitSqlBody(this);
	}
};

SqlBodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitSqlBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.SqlBodyContext = SqlBodyContext;

JustMapParser.prototype.sqlBody = function() {

    var localctx = new SqlBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, JustMapParser.RULE_sqlBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 75;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case JustMapParser.HashIf:
                this.state = 70;
                this.ifStatement();
                break;
            case JustMapParser.HashFor:
                this.state = 71;
                this.forStatement();
                break;
            case JustMapParser.HashForeach:
                this.state = 72;
                this.foreachStatement();
                break;
            case JustMapParser.HashInclude:
            case JustMapParser.HashInclude0:
                this.state = 73;
                this.includeStatement();
                break;
            case JustMapParser.Param:
            case JustMapParser.NL:
            case JustMapParser.TEXT:
                this.state = 74;
                this.sqlLine();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 77; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JustMapParser.HashInclude) | (1 << JustMapParser.HashIf) | (1 << JustMapParser.HashFor))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (JustMapParser.HashForeach - 32)) | (1 << (JustMapParser.HashInclude0 - 32)) | (1 << (JustMapParser.Param - 32)) | (1 << (JustMapParser.NL - 32)) | (1 << (JustMapParser.TEXT - 32)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SqlLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_sqlLine;
    return this;
}

SqlLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SqlLineContext.prototype.constructor = SqlLineContext;

SqlLineContext.prototype.nl = function() {
    return this.getTypedRuleContext(NlContext,0);
};

SqlLineContext.prototype.plainText = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PlainTextContext);
    } else {
        return this.getTypedRuleContext(PlainTextContext,i);
    }
};

SqlLineContext.prototype.param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParamContext);
    } else {
        return this.getTypedRuleContext(ParamContext,i);
    }
};

SqlLineContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterSqlLine(this);
	}
};

SqlLineContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitSqlLine(this);
	}
};

SqlLineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitSqlLine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.SqlLineContext = SqlLineContext;

JustMapParser.prototype.sqlLine = function() {

    var localctx = new SqlLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, JustMapParser.RULE_sqlLine);
    var _la = 0; // Token type
    try {
        this.state = 96;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 83;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JustMapParser.Param || _la===JustMapParser.TEXT) {
                this.state = 81;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case JustMapParser.TEXT:
                    this.state = 79;
                    this.plainText();
                    break;
                case JustMapParser.Param:
                    this.state = 80;
                    this.param();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 85;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 86;
            this.nl();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 89; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 89;
            		this._errHandler.sync(this);
            		switch(this._input.LA(1)) {
            		case JustMapParser.TEXT:
            		    this.state = 87;
            		    this.plainText();
            		    break;
            		case JustMapParser.Param:
            		    this.state = 88;
            		    this.param();
            		    break;
            		default:
            		    throw new antlr4.error.NoViableAltException(this);
            		}
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 91; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 94;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
            if(la_===1) {
                this.state = 93;
                this.nl();

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.ifDeclare = function() {
    return this.getTypedRuleContext(IfDeclareContext,0);
};

IfStatementContext.prototype.openBrace = function() {
    return this.getTypedRuleContext(OpenBraceContext,0);
};

IfStatementContext.prototype.sqlBody = function() {
    return this.getTypedRuleContext(SqlBodyContext,0);
};

IfStatementContext.prototype.closeBrace = function() {
    return this.getTypedRuleContext(CloseBraceContext,0);
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitIfStatement(this);
	}
};

IfStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitIfStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.IfStatementContext = IfStatementContext;

JustMapParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, JustMapParser.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98;
        this.ifDeclare();
        this.state = 99;
        this.openBrace();
        this.state = 100;
        this.sqlBody();
        this.state = 101;
        this.closeBrace();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfDeclareContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_ifDeclare;
    return this;
}

IfDeclareContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfDeclareContext.prototype.constructor = IfDeclareContext;

IfDeclareContext.prototype.HashIf = function() {
    return this.getToken(JustMapParser.HashIf, 0);
};

IfDeclareContext.prototype.openParen = function() {
    return this.getTypedRuleContext(OpenParenContext,0);
};

IfDeclareContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

IfDeclareContext.prototype.closeParen = function() {
    return this.getTypedRuleContext(CloseParenContext,0);
};

IfDeclareContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterIfDeclare(this);
	}
};

IfDeclareContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitIfDeclare(this);
	}
};

IfDeclareContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitIfDeclare(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.IfDeclareContext = IfDeclareContext;

JustMapParser.prototype.ifDeclare = function() {

    var localctx = new IfDeclareContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, JustMapParser.RULE_ifDeclare);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.match(JustMapParser.HashIf);
        this.state = 104;
        this.openParen();
        this.state = 105;
        this.expr(0);
        this.state = 106;
        this.closeParen();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_forStatement;
    return this;
}

ForStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStatementContext.prototype.constructor = ForStatementContext;

ForStatementContext.prototype.forDeclare = function() {
    return this.getTypedRuleContext(ForDeclareContext,0);
};

ForStatementContext.prototype.openBrace = function() {
    return this.getTypedRuleContext(OpenBraceContext,0);
};

ForStatementContext.prototype.sqlBody = function() {
    return this.getTypedRuleContext(SqlBodyContext,0);
};

ForStatementContext.prototype.closeBrace = function() {
    return this.getTypedRuleContext(CloseBraceContext,0);
};

ForStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterForStatement(this);
	}
};

ForStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitForStatement(this);
	}
};

ForStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitForStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.ForStatementContext = ForStatementContext;

JustMapParser.prototype.forStatement = function() {

    var localctx = new ForStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, JustMapParser.RULE_forStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.forDeclare();
        this.state = 109;
        this.openBrace();
        this.state = 110;
        this.sqlBody();
        this.state = 111;
        this.closeBrace();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForDeclareContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_forDeclare;
    return this;
}

ForDeclareContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForDeclareContext.prototype.constructor = ForDeclareContext;

ForDeclareContext.prototype.HashFor = function() {
    return this.getToken(JustMapParser.HashFor, 0);
};

ForDeclareContext.prototype.openParen = function() {
    return this.getTypedRuleContext(OpenParenContext,0);
};

ForDeclareContext.prototype.indexExpr = function() {
    return this.getTypedRuleContext(IndexExprContext,0);
};

ForDeclareContext.prototype.closeParen = function() {
    return this.getTypedRuleContext(CloseParenContext,0);
};

ForDeclareContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterForDeclare(this);
	}
};

ForDeclareContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitForDeclare(this);
	}
};

ForDeclareContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitForDeclare(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.ForDeclareContext = ForDeclareContext;

JustMapParser.prototype.forDeclare = function() {

    var localctx = new ForDeclareContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, JustMapParser.RULE_forDeclare);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(JustMapParser.HashFor);
        this.state = 114;
        this.openParen();
        this.state = 115;
        this.indexExpr();
        this.state = 116;
        this.closeParen();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForeachStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_foreachStatement;
    return this;
}

ForeachStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForeachStatementContext.prototype.constructor = ForeachStatementContext;

ForeachStatementContext.prototype.foreachDeclare = function() {
    return this.getTypedRuleContext(ForeachDeclareContext,0);
};

ForeachStatementContext.prototype.openBrace = function() {
    return this.getTypedRuleContext(OpenBraceContext,0);
};

ForeachStatementContext.prototype.sqlBody = function() {
    return this.getTypedRuleContext(SqlBodyContext,0);
};

ForeachStatementContext.prototype.closeBrace = function() {
    return this.getTypedRuleContext(CloseBraceContext,0);
};

ForeachStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterForeachStatement(this);
	}
};

ForeachStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitForeachStatement(this);
	}
};

ForeachStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitForeachStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.ForeachStatementContext = ForeachStatementContext;

JustMapParser.prototype.foreachStatement = function() {

    var localctx = new ForeachStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, JustMapParser.RULE_foreachStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.foreachDeclare();
        this.state = 119;
        this.openBrace();
        this.state = 120;
        this.sqlBody();
        this.state = 121;
        this.closeBrace();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForeachDeclareContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_foreachDeclare;
    return this;
}

ForeachDeclareContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForeachDeclareContext.prototype.constructor = ForeachDeclareContext;

ForeachDeclareContext.prototype.HashForeach = function() {
    return this.getToken(JustMapParser.HashForeach, 0);
};

ForeachDeclareContext.prototype.openParen = function() {
    return this.getTypedRuleContext(OpenParenContext,0);
};

ForeachDeclareContext.prototype.inExpr = function() {
    return this.getTypedRuleContext(InExprContext,0);
};

ForeachDeclareContext.prototype.closeParen = function() {
    return this.getTypedRuleContext(CloseParenContext,0);
};

ForeachDeclareContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterForeachDeclare(this);
	}
};

ForeachDeclareContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitForeachDeclare(this);
	}
};

ForeachDeclareContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitForeachDeclare(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.ForeachDeclareContext = ForeachDeclareContext;

JustMapParser.prototype.foreachDeclare = function() {

    var localctx = new ForeachDeclareContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, JustMapParser.RULE_foreachDeclare);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.match(JustMapParser.HashForeach);
        this.state = 124;
        this.openParen();
        this.state = 125;
        this.inExpr();
        this.state = 126;
        this.closeParen();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_inExpr;
    return this;
}

InExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InExprContext.prototype.constructor = InExprContext;

InExprContext.prototype.VAR = function() {
    return this.getToken(JustMapParser.VAR, 0);
};

InExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

InExprContext.prototype.IN = function() {
    return this.getToken(JustMapParser.IN, 0);
};

InExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterInExpr(this);
	}
};

InExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitInExpr(this);
	}
};

InExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitInExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.InExprContext = InExprContext;

JustMapParser.prototype.inExpr = function() {

    var localctx = new InExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, JustMapParser.RULE_inExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(JustMapParser.VAR);
        this.state = 129;
        this.expr(0);
        this.state = 130;
        this.match(JustMapParser.IN);
        this.state = 131;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IndexExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_indexExpr;
    return this;
}

IndexExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IndexExprContext.prototype.constructor = IndexExprContext;

IndexExprContext.prototype.SEMICOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JustMapParser.SEMICOLON);
    } else {
        return this.getToken(JustMapParser.SEMICOLON, i);
    }
};


IndexExprContext.prototype.VAR = function() {
    return this.getToken(JustMapParser.VAR, 0);
};

IndexExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

IndexExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterIndexExpr(this);
	}
};

IndexExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitIndexExpr(this);
	}
};

IndexExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitIndexExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.IndexExprContext = IndexExprContext;

JustMapParser.prototype.indexExpr = function() {

    var localctx = new IndexExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, JustMapParser.RULE_indexExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===JustMapParser.VAR) {
            this.state = 133;
            this.match(JustMapParser.VAR);
            this.state = 134;
            this.expr(0);
        }

        this.state = 137;
        this.match(JustMapParser.SEMICOLON);
        this.state = 139;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JustMapParser.OpenParen) | (1 << JustMapParser.BOOL) | (1 << JustMapParser.STR) | (1 << JustMapParser.NUM) | (1 << JustMapParser.INC) | (1 << JustMapParser.DEC) | (1 << JustMapParser.NOT) | (1 << JustMapParser.SqlId) | (1 << JustMapParser.ID))) !== 0)) {
            this.state = 138;
            this.expr(0);
        }

        this.state = 141;
        this.match(JustMapParser.SEMICOLON);
        this.state = 143;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JustMapParser.OpenParen) | (1 << JustMapParser.BOOL) | (1 << JustMapParser.STR) | (1 << JustMapParser.NUM) | (1 << JustMapParser.INC) | (1 << JustMapParser.DEC) | (1 << JustMapParser.NOT) | (1 << JustMapParser.SqlId) | (1 << JustMapParser.ID))) !== 0)) {
            this.state = 142;
            this.expr(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.OpenParen = function() {
    return this.getToken(JustMapParser.OpenParen, 0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.CloseParen = function() {
    return this.getToken(JustMapParser.CloseParen, 0);
};

ExprContext.prototype.NOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JustMapParser.NOT);
    } else {
        return this.getToken(JustMapParser.NOT, i);
    }
};


ExprContext.prototype.INC = function() {
    return this.getToken(JustMapParser.INC, 0);
};

ExprContext.prototype.DEC = function() {
    return this.getToken(JustMapParser.DEC, 0);
};

ExprContext.prototype.STR = function() {
    return this.getToken(JustMapParser.STR, 0);
};

ExprContext.prototype.NUM = function() {
    return this.getToken(JustMapParser.NUM, 0);
};

ExprContext.prototype.BOOL = function() {
    return this.getToken(JustMapParser.BOOL, 0);
};

ExprContext.prototype.ID = function() {
    return this.getToken(JustMapParser.ID, 0);
};

ExprContext.prototype.SqlId = function() {
    return this.getToken(JustMapParser.SqlId, 0);
};

ExprContext.prototype.MULDIV = function() {
    return this.getToken(JustMapParser.MULDIV, 0);
};

ExprContext.prototype.ADDSUB = function() {
    return this.getToken(JustMapParser.ADDSUB, 0);
};

ExprContext.prototype.CMP = function() {
    return this.getToken(JustMapParser.CMP, 0);
};

ExprContext.prototype.AND = function() {
    return this.getToken(JustMapParser.AND, 0);
};

ExprContext.prototype.OR = function() {
    return this.getToken(JustMapParser.OR, 0);
};

ExprContext.prototype.EQUAL = function() {
    return this.getToken(JustMapParser.EQUAL, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



JustMapParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 26;
    this.enterRecursionRule(localctx, 26, JustMapParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case JustMapParser.OpenParen:
            this.state = 146;
            this.match(JustMapParser.OpenParen);
            this.state = 147;
            this.expr(0);
            this.state = 148;
            this.match(JustMapParser.CloseParen);
            break;
        case JustMapParser.NOT:
            this.state = 151; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 150;
            		this.match(JustMapParser.NOT);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 153; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 155;
            this.expr(14);
            break;
        case JustMapParser.INC:
        case JustMapParser.DEC:
            this.state = 156;
            _la = this._input.LA(1);
            if(!(_la===JustMapParser.INC || _la===JustMapParser.DEC)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 157;
            this.expr(11);
            break;
        case JustMapParser.STR:
            this.state = 158;
            this.match(JustMapParser.STR);
            break;
        case JustMapParser.NUM:
            this.state = 159;
            this.match(JustMapParser.NUM);
            break;
        case JustMapParser.BOOL:
            this.state = 160;
            this.match(JustMapParser.BOOL);
            break;
        case JustMapParser.ID:
            this.state = 161;
            this.match(JustMapParser.ID);
            break;
        case JustMapParser.SqlId:
            this.state = 162;
            this.match(JustMapParser.SqlId);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 187;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 185;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, JustMapParser.RULE_expr);
                    this.state = 165;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 166;
                    this.match(JustMapParser.MULDIV);
                    this.state = 167;
                    this.expr(14);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, JustMapParser.RULE_expr);
                    this.state = 168;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 169;
                    this.match(JustMapParser.ADDSUB);
                    this.state = 170;
                    this.expr(13);
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, JustMapParser.RULE_expr);
                    this.state = 171;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 172;
                    this.match(JustMapParser.CMP);
                    this.state = 173;
                    this.expr(10);
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, JustMapParser.RULE_expr);
                    this.state = 174;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 175;
                    this.match(JustMapParser.AND);
                    this.state = 176;
                    this.expr(9);
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, JustMapParser.RULE_expr);
                    this.state = 177;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 178;
                    this.match(JustMapParser.OR);
                    this.state = 179;
                    this.expr(8);
                    break;

                case 6:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, JustMapParser.RULE_expr);
                    this.state = 180;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 181;
                    this.match(JustMapParser.EQUAL);
                    this.state = 182;
                    this.expr(7);
                    break;

                case 7:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, JustMapParser.RULE_expr);
                    this.state = 183;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 184;
                    _la = this._input.LA(1);
                    if(!(_la===JustMapParser.INC || _la===JustMapParser.DEC)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    break;

                } 
            }
            this.state = 189;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function IncludeStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_includeStatement;
    return this;
}

IncludeStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncludeStatementContext.prototype.constructor = IncludeStatementContext;

IncludeStatementContext.prototype.openParen = function() {
    return this.getTypedRuleContext(OpenParenContext,0);
};

IncludeStatementContext.prototype.sqlId = function() {
    return this.getTypedRuleContext(SqlIdContext,0);
};

IncludeStatementContext.prototype.closeParen = function() {
    return this.getTypedRuleContext(CloseParenContext,0);
};

IncludeStatementContext.prototype.HashInclude = function() {
    return this.getToken(JustMapParser.HashInclude, 0);
};

IncludeStatementContext.prototype.HashInclude0 = function() {
    return this.getToken(JustMapParser.HashInclude0, 0);
};

IncludeStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterIncludeStatement(this);
	}
};

IncludeStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitIncludeStatement(this);
	}
};

IncludeStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitIncludeStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.IncludeStatementContext = IncludeStatementContext;

JustMapParser.prototype.includeStatement = function() {

    var localctx = new IncludeStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, JustMapParser.RULE_includeStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        _la = this._input.LA(1);
        if(!(_la===JustMapParser.HashInclude || _la===JustMapParser.HashInclude0)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 191;
        this.openParen();
        this.state = 192;
        this.sqlId();
        this.state = 193;
        this.closeParen();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_colon;
    return this;
}

ColonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColonContext.prototype.constructor = ColonContext;

ColonContext.prototype.COLON = function() {
    return this.getToken(JustMapParser.COLON, 0);
};

ColonContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterColon(this);
	}
};

ColonContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitColon(this);
	}
};

ColonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitColon(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.ColonContext = ColonContext;

JustMapParser.prototype.colon = function() {

    var localctx = new ColonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, JustMapParser.RULE_colon);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(JustMapParser.COLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OpenBraceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_openBrace;
    return this;
}

OpenBraceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OpenBraceContext.prototype.constructor = OpenBraceContext;

OpenBraceContext.prototype.OpenBrace = function() {
    return this.getToken(JustMapParser.OpenBrace, 0);
};

OpenBraceContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterOpenBrace(this);
	}
};

OpenBraceContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitOpenBrace(this);
	}
};

OpenBraceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitOpenBrace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.OpenBraceContext = OpenBraceContext;

JustMapParser.prototype.openBrace = function() {

    var localctx = new OpenBraceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, JustMapParser.RULE_openBrace);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.match(JustMapParser.OpenBrace);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CloseBraceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_closeBrace;
    return this;
}

CloseBraceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CloseBraceContext.prototype.constructor = CloseBraceContext;

CloseBraceContext.prototype.CloseBrace = function() {
    return this.getToken(JustMapParser.CloseBrace, 0);
};

CloseBraceContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterCloseBrace(this);
	}
};

CloseBraceContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitCloseBrace(this);
	}
};

CloseBraceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitCloseBrace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.CloseBraceContext = CloseBraceContext;

JustMapParser.prototype.closeBrace = function() {

    var localctx = new CloseBraceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, JustMapParser.RULE_closeBrace);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(JustMapParser.CloseBrace);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OpenParenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_openParen;
    return this;
}

OpenParenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OpenParenContext.prototype.constructor = OpenParenContext;

OpenParenContext.prototype.OpenParen = function() {
    return this.getToken(JustMapParser.OpenParen, 0);
};

OpenParenContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterOpenParen(this);
	}
};

OpenParenContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitOpenParen(this);
	}
};

OpenParenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitOpenParen(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.OpenParenContext = OpenParenContext;

JustMapParser.prototype.openParen = function() {

    var localctx = new OpenParenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, JustMapParser.RULE_openParen);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.match(JustMapParser.OpenParen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CloseParenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_closeParen;
    return this;
}

CloseParenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CloseParenContext.prototype.constructor = CloseParenContext;

CloseParenContext.prototype.CloseParen = function() {
    return this.getToken(JustMapParser.CloseParen, 0);
};

CloseParenContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterCloseParen(this);
	}
};

CloseParenContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitCloseParen(this);
	}
};

CloseParenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitCloseParen(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.CloseParenContext = CloseParenContext;

JustMapParser.prototype.closeParen = function() {

    var localctx = new CloseParenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, JustMapParser.RULE_closeParen);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        this.match(JustMapParser.CloseParen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SqlIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_sqlId;
    return this;
}

SqlIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SqlIdContext.prototype.constructor = SqlIdContext;

SqlIdContext.prototype.SqlId = function() {
    return this.getToken(JustMapParser.SqlId, 0);
};

SqlIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterSqlId(this);
	}
};

SqlIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitSqlId(this);
	}
};

SqlIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitSqlId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.SqlIdContext = SqlIdContext;

JustMapParser.prototype.sqlId = function() {

    var localctx = new SqlIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, JustMapParser.RULE_sqlId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this.match(JustMapParser.SqlId);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_param;
    return this;
}

ParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamContext.prototype.constructor = ParamContext;

ParamContext.prototype.Param = function() {
    return this.getToken(JustMapParser.Param, 0);
};

ParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterParam(this);
	}
};

ParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitParam(this);
	}
};

ParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitParam(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.ParamContext = ParamContext;

JustMapParser.prototype.param = function() {

    var localctx = new ParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, JustMapParser.RULE_param);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this.match(JustMapParser.Param);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PlainTextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_plainText;
    return this;
}

PlainTextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PlainTextContext.prototype.constructor = PlainTextContext;

PlainTextContext.prototype.TEXT = function() {
    return this.getToken(JustMapParser.TEXT, 0);
};

PlainTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterPlainText(this);
	}
};

PlainTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitPlainText(this);
	}
};

PlainTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitPlainText(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.PlainTextContext = PlainTextContext;

JustMapParser.prototype.plainText = function() {

    var localctx = new PlainTextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, JustMapParser.RULE_plainText);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this.match(JustMapParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_nl;
    return this;
}

NlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NlContext.prototype.constructor = NlContext;

NlContext.prototype.NL = function() {
    return this.getToken(JustMapParser.NL, 0);
};

NlContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterNl(this);
	}
};

NlContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitNl(this);
	}
};

NlContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitNl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.NlContext = NlContext;

JustMapParser.prototype.nl = function() {

    var localctx = new NlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, JustMapParser.RULE_nl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this.match(JustMapParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EofContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JustMapParser.RULE_eof;
    return this;
}

EofContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EofContext.prototype.constructor = EofContext;

EofContext.prototype.EOF = function() {
    return this.getToken(JustMapParser.EOF, 0);
};

EofContext.prototype.enterRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.enterEof(this);
	}
};

EofContext.prototype.exitRule = function(listener) {
    if(listener instanceof JustMapParserListener ) {
        listener.exitEof(this);
	}
};

EofContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JustMapParserVisitor ) {
        return visitor.visitEof(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JustMapParser.EofContext = EofContext;

JustMapParser.prototype.eof = function() {

    var localctx = new EofContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, JustMapParser.RULE_eof);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.match(JustMapParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


JustMapParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 13:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

JustMapParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);
		case 1:
			return this.precpred(this._ctx, 12);
		case 2:
			return this.precpred(this._ctx, 9);
		case 3:
			return this.precpred(this._ctx, 8);
		case 4:
			return this.precpred(this._ctx, 7);
		case 5:
			return this.precpred(this._ctx, 6);
		case 6:
			return this.precpred(this._ctx, 10);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.JustMapParser = JustMapParser;

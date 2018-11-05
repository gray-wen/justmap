lexer grammar JustMapLexer;

@lexer::members {
    JustMapLexer.DEFAULT_MODE = 0;
	JustMapLexer.prototype.statementStack = [];
	JustMapLexer.prototype.currentStatement = function() {
		return this.statementStack.length == 0 ? null : this.statementStack[this.statementStack.length - 1];
	}
	JustMapLexer.prototype.pushStatement = function(statement) {
		this.statementStack.push(statement);
	}
	JustMapLexer.prototype.popStatement = function() {
		return this.statementStack.pop();
	}
	JustMapLexer.prototype.pushStack = function(statement) {
		this.pushStatement(statement);
		this.pushMode(JustMapLexer.DEFAULT_MODE);
	}
	JustMapLexer.prototype.popStack = function() {
		this.popMode();
		this.popStatement();
	}
	JustMapLexer.prototype.popStack2 = function() {
		this.popStatement();
		this.popMode();
		if(this._modeStack.length > 0) {
			this.popMode();
		}
	}
	JustMapLexer.prototype.clearStack = function() {
		while(this.statementStack.length > 0) {
			this.popStatement();
		}
		while(this._modeStack.length > 0) {
			this.popMode();
		}
	}
	JustMapLexer.prototype.printStack = function() {
		/*
		console.log(this.currentStatement() 
			+ '\t' + this._mode 
			+ '\t' + this.statementStack.length 
			+ '\t' + this._modeStack.length);
		 */
	}
}

HashSql: ('#sql' | '#select' | '#insert' | '#update' | '#delete')
{
	this.clearStack();
	this.pushStack("sql");
	this.printStack();
};

HashInclude: '#include'
{
	this.pushStack("include");
	this.printStack();
};

COLON: ':'{
	if(this.currentStatement() == "sql"){
		this.pushMode(JustMapLexer.TEXT_MODE);
	}
	this.printStack();
};

OpenBrace: '{'
{
	if(this.currentStatement() == "sql" 
	|| this.currentStatement() == "if" 
	|| this.currentStatement() == "for"
	|| this.currentStatement() == "foreach"){
		this.pushMode(JustMapLexer.TEXT_MODE);
	}
	this.printStack();
};


OpenParen: '(';

CloseParen: ')'
{
	if(this.currentStatement() == "include"){
		this.popStack();
	}
	this.printStack();
};

IN: 'in';

BOOL: 'true' | 'false';

STR:
	'"' (('\\' (["\\/bfnrt] | UNICODE)) | ~ ["\\])* '"' 
	| '\'' (('\\' (['\\/bfnrt] | UNICODE)) | ~ ['\\])* '\'';

fragment UNICODE: 
	'u' HEX HEX HEX HEX;

fragment HEX: 
	[0-9a-fA-F];

NUM: 
	'-'? INT '.' [0-9] + EXP? | '-'? INT EXP | '-'? INT;

fragment INT: 
	'0' | [1-9] [0-9]*;

fragment EXP: 
	[Ee] [+\-]? INT;

VAR: 'var';

INC: '++';

DEC: '--';

MULDIV: ('*' | '/');

ADDSUB: ('+' | '-');

EQUAL: '=';

CMP: ('==' | '!=' | '===' | '!==' | '>' | '>=' | '<' | '<=');

AND: ('&&' | 'and');

OR: ('||' | 'or');
	
NOT: '!';

SEMICOLON: ';';

BlockComment: 
	'/*' .*? '*/';

LineComment: 
	'-- ' ~[\r\n]*;

SqlId: SYNTAX('.'SYNTAX)*;

ID:
	(('@''@'?)SYNTAX(IDX*)('.'SYNTAX(IDX*))*'@'?
	| ('$''$'?)SYNTAX(IDX*)('.'SYNTAX(IDX*))*'$'?);

IDX: 
	('['(INT+|SYNTAX)']');

SYNTAX:
	([a-zA-Z_] [0-9a-zA-Z_]*);

WS:
	[ \t\r\n] + -> skip;

mode TEXT_MODE;

HashSql0: ('#sql' | '#select' | '#insert' | '#update' | '#delete') 
{
	this.clearStack();
	this.pushStack("sql");
	this.printStack();
};

HashIf: '#if'
{
	this.pushStack("if");
	this.printStack();
};

HashFor: '#for'
{
	this.pushStack("for");
	this.printStack();
};

HashForeach: '#foreach'
{
	this.pushStack("foreach");
	this.printStack();
};

HashInclude0: '#include'
{
	this.pushStack("include");
	this.printStack();
};

CloseBrace: '}'
{
	this.popStack2();
	this.printStack();
};

Param: ID;

NL: ('\r'?'\n')+;

TEXT:
	(~[#}@$\r\n] | '##')+;



parser grammar JustMapParser;

options { tokenVocab=JustMapLexer; }

root: 
	(sqlStatement)*
	;

sqlStatement: 
	(sqlDeclare colon sqlBody)
	| (sqlDeclare openBrace sqlBody closeBrace)
	;

sqlDeclare:
	(HashSql | HashSql0) sqlId
	;
	
sqlBody:
	(ifStatement 
	| forStatement
	| foreachStatement
	| includeStatement
	| sqlLine)+
	;

sqlLine:
	(plainText | param)* nl
	| (plainText | param)+ nl?
	;

ifStatement:
	ifDeclare openBrace sqlBody closeBrace
	;
	
ifDeclare:
	HashIf openParen expr closeParen
	;

forStatement:
	forDeclare openBrace sqlBody closeBrace
	;

forDeclare:
	HashFor openParen indexExpr closeParen
	;

foreachStatement:
	foreachDeclare openBrace sqlBody closeBrace
	;

foreachDeclare:
	HashForeach openParen inExpr closeParen
	;

inExpr:
	VAR expr IN expr
	;

indexExpr:
	(VAR expr)? SEMICOLON (expr)? SEMICOLON (expr)?
	;

expr:
	OpenParen expr CloseParen
	| NOT+ expr
	| expr MULDIV expr
	| expr ADDSUB expr
	| (INC | DEC) expr
	| expr (INC | DEC)
	| expr CMP expr
	| expr AND expr
	| expr OR expr
	| expr EQUAL expr
	| STR
	| NUM
	| BOOL
	| ID
	| SqlId
	;
	
includeStatement:
	(HashInclude | HashInclude0) openParen sqlId closeParen
	;

colon:
	COLON
	;

openBrace:
	OpenBrace
	;

closeBrace:
	CloseBrace
	;

openParen:
	OpenParen
	;

closeParen:
	CloseParen
	;

sqlId:
	SqlId
	;

param:
	Param
	;
	
plainText:
	TEXT
	;

nl:
	NL
	;

eof: 
	EOF
	;

	

	

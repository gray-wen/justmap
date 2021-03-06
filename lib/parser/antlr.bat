@ECHO OFF

SET CLASSPATH=..\..\antlr\antlr-4.7-complete.jar
SET Namespace=db.parser
SET G4Folder=%~dp0
SET Options=-Dlanguage=JavaScript -package %Namespace% -visitor -listener -encoding UTF8

SET G4File=JustMapLexer
DEL /Q ^
	%G4Folder%%G4File%.tokens ^
	%G4Folder%%G4File%.js				
SET FullPath=%G4Folder%%G4File%.g4
JAVA org.antlr.v4.Tool %FullPath% %Options%

SET	G4File=JustMapParser
DEL /Q ^
	%G4Folder%%G4File%.tokens		  ^
	%G4Folder%%G4File%.js		      ^
	%G4Folder%%G4File%Listener.js	  ^
	%G4Folder%%G4File%Visitor.js	  

SET FullPath=%G4Folder%%G4File%.g4
JAVA org.antlr.v4.Tool %FullPath% %Options%
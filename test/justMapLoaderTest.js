var Path = require('path');
var loader = require('../lib/loader/JustMapLoader');

var justMap = {};
loader.JustMapLoader.loadJustMapFile(Path.resolve(__dirname, './test.justmap'), justMap, function (error, files) {
    console.log(files)
});

loader.JustMapLoader.loadJustMapDir(Path.resolve(__dirname), justMap, function (err, justMap, files) {
    if (err) throw err;
    console.log(justMap);
});

loader.JustMapLoader.getAllFiles(Path.resolve(__dirname), function (files) {
    debugger
});

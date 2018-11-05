const fs = require('fs');
const path = require('path');

function JustMapLoader() { }

function traverseDirectory(dir, callback) {
    var dirList = [];
    fs.readdir(dir, function (err, list) {
        dir = fs.realpathSync(dir);
        if (err) {
            return callback(err);
        }
        var len = list.length;
        list.forEach(function (file) {
            file = dir + '/' + file;
            fs.stat(file, function (err, stat) {
                if (err) throw new Error('Load directory files failed.');
                dirList.push(file);
                if (stat && stat.isDirectory()) {
                    traverseDirectory(file, function (err, parsed) {
                        if (err) throw new Error('Load directory files failed.');
                        dirList = dirList.concat(parsed);
                        if (!--len) {
                            callback(null, dirList);
                        }
                    });
                } else {
                    if (!--len) {
                        callback(null, dirList);
                    }
                }
            });
        });
    });
}

JustMapLoader.loadJustMapFile = function (fileName, parseFunction, callback) {
    let input = fs.readFileSync(fileName).toString();
    if (typeof parseFunction === 'function') parseFunction(input);
    if (typeof callback === 'function') callback(null, [path.resolve(fileName)]);
}

JustMapLoader.loadJustMapDir = function (dirName, parseFunction, callback) {
    traverseDirectory(dirName, function (err, result) {
        if (err) {
            if (typeof callback === 'function') {
                callback(err);
            }
        } else {
            var fileList = [];
            /** @type {array} */
            var res = result;
            for (var i = 0; i < res.length; i++) {
                var ext = path.extname(res[i]);
                if (ext && ext.toLowerCase() === '.justmap') {
                    fileList.push(res[i]);
                    JustMapLoader.loadJustMapFile(res[i], parseFunction);
                }
            }
            if (typeof callback === 'function') {
                callback(null, fileList);
            }
        }
    });
}

exports.JustMapLoader = JustMapLoader;
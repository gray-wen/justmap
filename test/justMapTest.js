var Path = require('path');
var { JustMap } = require('../justmap');

var connectionConfig = {
    host: "",
    port: 5432,
    user: "",
    password: "",
    database: "",
};

var justMap = new JustMap(connectionConfig);

try {
    (async () => {

        await JustMap.loadJustMapsAsync(Path.resolve(__dirname));

        let results;

        results = await justMap.justQueryAsync('CreateTestData', {
            datas: {
                name: 'test' + Math.random(),
                email: 'test@outlook.com',
                create_time: '2018-11-06',
            }
        });

        console.log(results);

        results = await justMap.justQueryAsync('GetTestData', {
            id: 22
        });

        console.log(results);

        results = await justMap.justQueryAsync('GetTestDataList', {
            ids: [23, 24],
            create_time: '2018-11-06',
            orderBy: 'id',
            from: 0,
            to: 10
        });

        console.log(results);

        bug
        results = await justMap.justQueryAsync('UpdateTestData', {
            id: 22,
            name: 'testname',
        });

        console.log(results);

    })().then(function () {

    });
} catch (err) {
    console.log(err);
}

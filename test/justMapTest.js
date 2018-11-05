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
        justMap.query('select * from user_profile where id in ($1)', [63], function (error, results) {
            console.log("callback", results);
        });

        let results = await justMap.queryAsync('select * from user_profile where id in ($1)', [63]);
        console.log(results);

        await JustMap.loadJustMapsAsync(Path.resolve(__dirname));

        results = await justMap.justQueryAsync('getUser', {
            id: 63
        });

        console.log(results);

        results = await justMap.justQueryAsync('getUserList', {
            id: 63,
            ids: [63, 64],
            orderBy: 'id',
            from: 0,
            to: 10
        });

        console.log(results);

        results = await justMap.justQueryAsync('createUser', {
            wx_open_id: 'test',
            create_time: new Date(),
            wx_user_info: {
                "nickName": "gray",
                "gender": 1,
                "language": "zh_CN",
                "city": "Yueyang",
                "province": "Hunan",
                "country": "China",
                "avatarUrl": "test"
            }
        });
        
        console.log(results);
    })().then(function () {

    });
} catch (err) {
    console.log(err);
}

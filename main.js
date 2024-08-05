// モジュールの読み込み
const request = require("request");
const dotenv = require("dotenv").config();

// node main.js 都市名 で都市名の温度を表示する
const argument = process.argv[2];

// どのようなURLで読み込むのかのオプション設定
// json形式を指定
// &units=metric 摂氏表記
// process.env.API_KEY .envファイルに記載しているAPI_KEYをセット
const options = {
    url: `https://api.openweathermap.org/data/2.5/weather?q=${argument}&units=metric&appid=${process.env.API_KEY}`,
    method: "GET",
    json: true,
};

// APIの使用
// 第一引数 オプション
// 第二引数 完了したときの動作
request(options, (error, res, body) => {
    // .main.temp 摂氏のみ表示
    console.log(`現在の${argument}の気温は${body.main.temp}度です。`);
});

// console.log(process.argv[2]);
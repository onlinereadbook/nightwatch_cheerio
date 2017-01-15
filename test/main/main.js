var cheerio = require("cheerio")
var path = require("path")
var fs = require("fs")
var moment = require("moment")
//var firebaselib = require("./firebaselib")
module.exports = {
    '抓取Ipeen的資料': (browser) => {
        browser.
            url('http://www.ipeen.com.tw/search/taiwan/000/0-100-0-0/')
            .waitForElementVisible('body', 1000)
            //.pause(2000)
            .source(function (result) { // .source() will dump the target page into text format
                // console.log(result.value);
                var $ = cheerio.load(result.value) // so it needs to be parse
                var data = $('.a_search_location').find('category').text();
                console.log(data);

            })
            .pause(2000)

    }
}

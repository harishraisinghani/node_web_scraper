const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const URL = 'http://substack.net/images/';

// request
//   .get('http://substack.net/images/')
//   .on('error', err => {
//     console.log(err);
//   })
//   .pipe(fs.createWriteStream('sampleOutput.csv'));

const getBody = (url, cb) => {
  request(url, function(error, response, body) {
    if (error) return cb(error, null);
    return cb(null, body);
  });
}

getBody(URL, function(err, body) {
  if (err) throw new Error('We have a problem in the getBody fcn');
  const $ = cheerio.load(body);
  const sampleOutput = $('code').text();
  console.log('res', sampleOutput);
})

// request('http://substack.net/images/', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     const $ = cheerio.load(body);
//     var sampleOutput = $('').text();
//     console.log(sampleOutput);
//   }
// });

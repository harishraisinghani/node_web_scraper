const fs = require('fs');
const request = require('request');

request
  .get('http://substack.net/images/')
  .on('error', function(err) {
    console.log(err)
  })
  .pipe(fs.createWriteStream('sampleOutput.csv'));
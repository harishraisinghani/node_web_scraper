const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const URL = 'http://substack.net/images/';

const getBody = (url, cb) => {
  request(url, function(error, response, body) {
    if (error) return cb(error, null);
    return cb(null, body);
  });
}

const getparsedArray = content => {
  const $ = cheerio.load(content);
  var fileURLS = [];
  var filePermissions = [];
  var fileExtensions = [];
  var parsedFileArray = [];

  $('a').each(function(i, elem) {
    var path = $(this).attr('href');
    fileURLS[i] = ' http://substack.net'+ path;
    fileExtensions[i] = path.split('.').pop();
  });

  $("tr td:first-child code").each(function(i,elem) {
    filePermissions[i] = $(this).text();
  });

  for(var i=0; i<fileURLS.length; i++) {
    if(filePermissions[i] && filePermissions[i].indexOf('d') !== 1) {
      parsedFileArray[i] = [fileURLS[i], fileExtensions[i], filePermissions[i]];
    }
  }
  return parsedFileArray.filter(Boolean); //This removes any undefined values in the filtered array
}


getBody(URL, function(err, body) {
  if (err) throw new Error('We have a problem in the getBody fcn');
  var result = getparsedArray(body);

  var outputFile = fs.createWriteStream('images.csv');
  for (var i = 0; i<result.length; i++) {
    outputFile.write(result[i] + "\n");
  }
});

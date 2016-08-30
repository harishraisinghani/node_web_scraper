const fs = require('fs');
const request = require('request');

request('http://substack.net/images/', (error, response, body) => {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML substack.net/images
  }
});
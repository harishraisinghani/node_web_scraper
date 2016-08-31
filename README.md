We will create a module that will make an HTTP GET request to http://substack.net/images/, parse the page’s html and write a file to disk called images.csv that has 3 columns populated from the remote html. The columns should be:

    *File Permission
    *Absolute URL
    *File Type


Step 1: Create scrapper.js, make a GET request to http://substack.net/images/ and stream the contents to console.log.
Step 2: Write the contents from the request to sampleOutput.csv
Step 3: Use cheerio to start parsing html data
Step 4: Parse file permission, file type and URL data from html
Step 5: Write parsed information to images.csv



//Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
//Solution: Use Node.js to perform the profile look ups and serve our template via HTTP

//1. Create a web server

var http = require('http');
http.createServer(function (request, response) {
  homeRoute(request, response);
}).listen(3000); //Do I need to add my own IP?
console.log('Server running at http://<workspace-url>/');

//2. Handel HTTP route GET / and POST / i.e. Home

function homeRoute(request, response){
  //if url == "/" && GET
  console.log("weee3eee still reading stuff");
  //if url == "/" && POST
    //redirect to /:username
}


//3. Handle HTTP route GET /:username i.e. /chalkers
  //if url == "/...."
    //get json from Treehouse
      //on "end"
    //on "error"
      //show error

//4. function that Handles the reading of files and merge in values
  // Read from file and get a string
     // merge values in to string

let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

var echoDB;

// Query echo3D
fetch('https://api.echo3D.com/query?key=' + API_KEY)
.then((response) => response.json())
.then((json) => {
  // Store database
  echoDB = json; // The JSON response
})
.catch((error) => {
  console.error(error);
});

var apiKey = echoDB.apiKey;
var db = Object.values(echoDB.db);

document.body.innerHTML = "<h1>Today's date is " + apiKey + "</h1>"

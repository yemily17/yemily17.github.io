var echoDB;

// Query echo3D
fetch('https://api.echo3D.com/query?key=' + steep-rain-1061)
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
console.log("API KEY IS "+apiKey)
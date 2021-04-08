// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Using javascript to populate the table in the html with elements from our objects in tableData
data.forEach(function(ufoData) {
    console.log(ufoData);
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(function([key, value]) {
    console.log(key, value);

      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Selecting the filter button
var button = d3.select("#filter-btn");

// Selecting all forms, because there is only one
var form = d3.selectAll("form");

// event handlers for clicking the button and pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // storing the table data in 'filtered' after it is filtered by a date that equals the user input
  var filtered = tableData.filter(filterDate => filterDate.datetime === inputValue)

  
  console.log(filtered);

  tbody.html("");

  // Using javascript to populate the table in the html with elements from our objects in filtered, thus only filtered data
  filtered.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
          var data = row.append("td");
          data.text(value);
      });
  });
};
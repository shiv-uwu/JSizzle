// ---------- //
// -SHIV-UWU- //
// ---------- //

console.log("Made by github.com/shiv-uwu")

function filterResults() { // function to filter results
    var input = document.getElementById("search-bar").value.toUpperCase(); // get input from search bar
    var results = document.getElementById("results"); // get results list
    var items = results.getElementsByTagName("li"); // get list items from results list

    for (var i = 0; i < items.length; i++) { // loop through list items
      var item = items[i];
      var text = item.textContent.toUpperCase();

      if (text.indexOf(input) > -1) { // check if item contains input
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    }
  }

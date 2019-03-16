$("#query").on("click", function(event) {
  $("#card").flip({
    axis: 'x',
    trigger: 'click',
  });
});

//Local Storage
var myPlaces = JSON.parse(localStorage.getItem("myPlaces"));
if(!myPlaces) {
  myPlaces = [];
}


// Local storage click function
$("#query").on("click", function(event) {
  event.preventDefault();
  var location = $("#search").val().trim();
  myPlaces.push(location);
  localStorage.setItem("myPlaces", JSON.stringify(myPlaces));

  myPlaces = JSON.parse(localStorage.getItem("myPlaces"));

  //get JSON from countries.json
  var country;
  $.getJSON('./assets/data/countries.json', function(countries) {         
    country = searchObj(location.toUpperCase(), countries).name;
    $("#myPlacesDropdown").append(`<a class="dropdown-item" href="#">` + country + `</a>`);
  });
});

function searchObj(code, myArray){
  for (var i=0; i < myArray.length; i++) {
      if (myArray[i].code === code) {
          return myArray[i];
      }
  }

}

///Firebase--- needs button ID &&&& HOW TO REF SPECIFIC STORAGE 
var database = firebase.database();
var placeCounter = 0; 
$("#FIREBASE ").on("click", function() {
  clickCounter++;
  database.ref().set({
    clickCount: clickCounter
});


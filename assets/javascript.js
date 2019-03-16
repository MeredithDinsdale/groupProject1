
// $("#query").on("click", function(event) {
//   $("#card").flip({
//     axis: 'x',
//     trigger: 'click',
//   });
// });

$( document ).ready(function() {
  $('#backOfCard').hide();
  $('#replaceNav').hide();
  $('.card').hide();
  
  
  $('.btnQuery').click(function(event){
      console.log(' Query button has been clicked');
      $('#frontOfCard').slideUp();
      $('#backOfCard').show();
      $('#firstNav').hide();  
      $('#replaceNav').show();
      let country = $('#query').val();
      $('#checkInBtn').addClass(country);
      console.log(country);
      $('#country').text(country);
      event.preventDefault();
  });

  $('#wikipedia').click(function () {
    window.location = "https://en.wikipedia.org/wiki/"+ country;
  })

  $('#encyclopedia').click(function () {
    window.location = "https://www.britannica.com/place/"+ country;
  })

});

// //Local Storage
// var myPlaces = JSON.parse(localStorage.getItem("myPlaces"));
// if(!myPlaces) {
//   myPlaces = [];
// }


// // Local storage click function
// $("#query").on("click", function(event) {
//   event.preventDefault();
//   var location = $("#search").val().trim();
//   myPlaces.push(location);
//   localStorage.setItem("myPlaces", JSON.stringify(myPlaces));

//   myPlaces = JSON.parse(localStorage.getItem("myPlaces"));

//   //get JSON from countries.json
//   var country;
//   $.getJSON('./assets/data/countries.json', function(countries) {         
//     country = searchObj(location.toUpperCase(), countries).name;
//     $("#myPlacesDropdown").append(`<a class="dropdown-item" href="#">` + country + `</a>`);
//   });
// });

// function searchObj(code, myArray){
//   for (var i=0; i < myArray.length; i++) {
//       if (myArray[i].code === code) {
//           return myArray[i];
//       }
//   }

// }

// ///Firebase--- needs button ID &&&& HOW TO REF SPECIFIC STORAGE 
// var database = firebase.database();
// var placeCounter = 0; 
// $("#FIREBASE ").on("click", function() {
//   clickCounter++;
//   database.ref().set({
//     clickCount: clickCounter
// });
// })


  

//         var country_code = $("#query").val();

//         var flag_url = "https://www.countryflags.io/" + country_code + "/flat/64.png";

//         var flagImage= $("<img>").attr("src", flag_url);

//         $('#flag').append(flagImage);

//         var config = {
//           apiKey: "AIzaSyARrHb0nP7XvLyaxVpm7MTrJ79C_SuyFHk",
//           authDomain: "global-intelligence-agency.firebaseapp.com",
//           databaseURL: "https://global-intelligence-agency.firebaseio.com",
//           projectId: "global-intelligence-agency",
//           storageBucket: "",
//           messagingSenderId: "817483264211"
//         };
//         firebase.initializeApp(config);
      
//         var database = firebase.database();
      
//         var clickCounter = 0;

//         $("#checkInBtn").on("click", function() {
//           clickCounter ++;
//           database.ref().set({
//           clickCount: clickCounter
//           });
//         });

//         $('#currentEventsBtn').click(function() {
//           $('.card').fadeIn(400);
//         })
      
//         database.ref().on("value", function(snapshot) {
//         console.log(snapshot.val()); 
//         clickCounter = snapshot.val().clickCount;
//         $("#checkInCount").text(snapshot.val().clickCount + ' people have visited this location.');
//         }, 
//         function(errorObject) {
//         console.log("The read failed: " + errorObject.code);
//         });

        

       
        

         
//       })


    
      
    

  
  


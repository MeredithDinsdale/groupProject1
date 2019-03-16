
  $( document ).ready(function() {
    $('#backOfCard').hide();
    $('#replaceNav').hide();
    });
    
    
    $('.btnQuery').click(function(){
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

        var country_code = $("#query").val();

        var flag_url = "https://www.countryflags.io/" + country_code + "/flat/64.png";

        var flagImage= $("<img>").attr("src", flag_url);

        $('#flag').append(flagImage);

        var config = {
          apiKey: "AIzaSyARrHb0nP7XvLyaxVpm7MTrJ79C_SuyFHk",
          authDomain: "global-intelligence-agency.firebaseapp.com",
          databaseURL: "https://global-intelligence-agency.firebaseio.com",
          projectId: "global-intelligence-agency",
          storageBucket: "",
          messagingSenderId: "817483264211"
        };
        firebase.initializeApp(config);
      
        var database = firebase.database();
      
        var clickCounter = 0;

        $("#checkInBtn").on("click", function() {
          clickCounter ++;
          database.ref().set({
          clickCount: clickCounter
          });
        });
      
        database.ref().on("value", function(snapshot) {
        console.log(snapshot.val()); 
        clickCounter = snapshot.val().clickCount;
        $("#checkInCount").text(snapshot.val().clickCount + ' people have visited this location.');
        }, 
        function(errorObject) {
        console.log("The read failed: " + errorObject.code);
        });

       
        

         
      });
      
    

  
  

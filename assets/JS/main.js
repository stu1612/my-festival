var myData = data;


//function to unhide image after click event
  function showImage(){
        document.getElementById('img_1').style.visibility='visible';
        document.getElementById('img_2').style.visibility='visible';
        document.getElementById('img_3').style.visibility='visible';
        document.getElementById('img_4').style.visibility='visible';
  }
  
  function showLink(){
        document.getElementById('link_1').style.visibility='visible';
        document.getElementById('link_2').style.visibility='visible';
        document.getElementById('link_3').style.visibility='visible';
        document.getElementById('link_4').style.visibility='visible';
  }


// ROCK - festival content col

  document.getElementById('button_rock').addEventListener('click', function() {
  
  document.getElementById("title_1").innerHTML = myData[0].Event;
  document.getElementById("text_1").innerHTML = myData[0].Place + " " + "," + myData[0].Country;
  document.getElementById("link_1").href = myData[0].URL;
  document.getElementById("img_1").src = myData[0].Image;

  document.getElementById("title_2").innerHTML = myData[1].Event;
  document.getElementById("text_2").innerHTML = myData[1].Place + " " + "," + myData[1].Country;
  document.getElementById("link_2").href = myData[1].URL;
  document.getElementById("img_2").src = myData[1].Image;
  
  document.getElementById("title_3").innerHTML = myData[2].Event;
  document.getElementById("text_3").innerHTML = myData[2].Place + " " + "," + myData[2].Country;
  document.getElementById("link_3").href = myData[2].URL;
  document.getElementById("img_3").src = myData[2].Image;

  document.getElementById("title_4").innerHTML = myData[3].Event;
  document.getElementById("text_4").innerHTML = myData[3].Place + " " + "," + myData[3].Country;
  document.getElementById("link_4").href = myData[3].URL;
  document.getElementById("img_4").src = myData[3].Image;
});  

  // POP - festival content col

  document.getElementById('button_pop').addEventListener('click', function() {
  
  document.getElementById("title_1").innerHTML = myData[4].Event;
  document.getElementById("text_1").innerHTML = myData[4].Place + " " + "," + myData[4].Country;
  document.getElementById("link_1").href = myData[4].URL;
  document.getElementById("img_1").src = myData[4].Image;

  document.getElementById("title_2").innerHTML = myData[5].Event;
  document.getElementById("text_2").innerHTML = myData[5].Place + " " + "," + myData[5].Country;
  document.getElementById("link_2").href = myData[5].URL;
  document.getElementById("img_2").src = myData[5].Image;
  
  document.getElementById("title_3").innerHTML = myData[6].Event;
  document.getElementById("text_3").innerHTML = myData[6].Place + " " + "," + myData[6].Country;
  document.getElementById("link_3").href = myData[6].URL;
  document.getElementById("img_3").src = myData[6].Image;

  document.getElementById("title_4").innerHTML = myData[7].Event;
  document.getElementById("text_4").innerHTML = myData[7].Place + " " + "," + myData[7].Country;
  document.getElementById("link_4").href = myData[7].URL;
  document.getElementById("img_4").src = myData[7].Image;
}); 

  // ELECTRONIC - festival content col

  document.getElementById('button_electronic').addEventListener('click', function() {
  
  document.getElementById("title_1").innerHTML = myData[8].Event;
  document.getElementById("text_1").innerHTML = myData[8].Place + " " + "," + myData[8].Country;
  document.getElementById("link_1").href = myData[8].URL;
  document.getElementById("img_1").src = myData[8].Image;

  document.getElementById("title_2").innerHTML = myData[9].Event;
  document.getElementById("text_2").innerHTML = myData[9].Place + " " + "," + myData[9].Country;
  document.getElementById("link_2").href = myData[9].URL;
  document.getElementById("img_2").src = myData[9].Image;
  
  document.getElementById("title_3").innerHTML = myData[10].Event;
  document.getElementById("text_3").innerHTML = myData[10].Place + " " + "," + myData[10].Country;
  document.getElementById("link_3").href = myData[10].URL;
  document.getElementById("img_3").src = myData[10].Image;

  document.getElementById("title_4").innerHTML = myData[11].Event;
  document.getElementById("text_4").innerHTML = myData[11].Place + " " + "," + myData[11].Country;
  document.getElementById("link_4").href = myData[11].URL;
  document.getElementById("img_4").src = myData[11].Image;
});








/*for(i=0; i<myData.length; i++) {
  if(myData[i].Genre === "Rock") {
    console.log(myData[i].Event);
  }
}*/



//JQUERY scripts

$(document).ready(function() {
    
    $('#search_helper').fadeIn(4000, function() {
      })
      .delay(4000)
      .fadeOut(4000, function() {
      });
  
    $('input').mouseenter(function() {
      $(this).fadeTo(1000,0.5);
    });
    
    $('input').mouseleave(function() {
      $(this).css('color', 'white');
    });
    
    $('input').mouseleave(function() {
      $(this).fadeTo(1000,1);
    });
    
    var glow = $('h1');
    setInterval(function() {
      glow.toggleClass('glow');
    }, 1000);
    
  
});

 
 
 
 
 // map section ------------------------------
 
 /*function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: {lat: -28.024, lng: 140.887}
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      var locations = [
        {lat: -31.563910, lng: 147.154312},
        {lat: -33.718234, lng: 150.363181},
        {lat: -33.727111, lng: 150.371124},
        {lat: -33.848588, lng: 151.209834},
        {lat: -33.851702, lng: 151.216968}
        
      ];*/
      
// end of map section


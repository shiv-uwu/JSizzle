
// ---------- //
// -SHIV-UWU- //
// ---------- //

function initMap() { // function to initialize map
    if (navigator.geolocation) { // check if geolocation is supported
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude; // get latitude
        var lng = position.coords.longitude; // get longitude
        var map = new google.maps.Map(document.getElementById('map'), { // create map
          center: {lat: lat, lng: lng},
          zoom: 12
        });
        var marker = new google.maps.Marker({ // create marker
          position: {lat: lat, lng: lng}, // set marker position
          map: map,
          title: 'You are here!' 
        });
      });
    } else {
      alert("Geolocation is not supported by this browser."); // alert if geolocation is not supported
    }
  }


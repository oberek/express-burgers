function initMap(){
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var pos;
    var uluru = {lat:40.768213, lng:-111.889179};

    var map = new google.maps.Map(document.getElementById('map'),{
    zoom:16,
    center:uluru
});

    directionsDisplay.setMap(map);

    var marker = new google.maps.Marker({
        position:uluru,
        map:map
    });

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
        pos = {
            lat:  position.coords.latitude,
            lng: position.coords.longitude
        };
        
        map.setCenter(pos);
        
        });
    }

    function calculateAndDisplayRoute(directionsService, directionsDisplay){
        directionsService.route({
            origin: new google.maps.LatLng(pos.lat, pos.lng),
            destination: uluru,
            travelMode: 'DRIVING'
        });
    }
    calculateAndDisplayRoute(directionsService, directionsDisplay);
}
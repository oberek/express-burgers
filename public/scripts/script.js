function initMap(){
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var pos;
    var uluru = {lat:40.768213, lng:-111.889179};

    var map = new google.maps.Map(document.getElementById('map'),{
    zoom:16,
    center:uluru
});
    var contentString = '<div>Latitude: '+ uluru.lat + '</br>Longitude: '+ uluru.lng + '</div>'
    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position:uluru,
        map:map
    });
    marker.addListener('click', function(){
        infoWindow.open(map,marker);
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


}
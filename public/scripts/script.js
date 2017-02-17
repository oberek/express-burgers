function initMap(){
    
    var pos;
    var uluru = {lat:40.768213, lng:-111.889179};

    var map = new google.maps.Map(document.getElementById('map'),{
    zoom:16,
    center:uluru
});
    var contentString = '<p3>City Creek Center<br>36 South State St., Unit 240<br>Salt Lake City, UT 84103</p3>'
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
            var latitude = position.coords.latitude;
            var longitude =position.coords.longitude;
            var coords = new google.maps.LatLng(latitude,longitude);
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer();
            var mapOptions = {
                zoom:15,
                center:coords,
                mapTypeControl:true,
                navigationControlOptions:
                {
                    style: google.maps.NavigationControlStyle.SMALL
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            directionsDisplay.setMap(map);
            var request = {
                origin:coords,
                destination: uluru,
                travelMode: google.maps.DirectionsTravelMode.DRIVING
            };
            directionsService.route(request, function(response, status){
                if(status == google.maps.DirectionsStatus.OK){
                    directionsDisplay.setDirections(response);
                }
            });
        });
    }


}
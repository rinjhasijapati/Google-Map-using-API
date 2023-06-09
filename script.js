function initialize() {
    var mapOptions = {
        zoom : 10 ,
        center : new google.maps.LatLng(40.7128, -74.0060) ,
        mapTypeId : google.maps.MapTypeId.TERRAIN ,
        minZoom : 2
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var infoWindow = new google.maps.InfoWindow();

    var marker = new google.maps.Marker({
        //Cordinates for Nepal, Kathmandu
        position: new google.maps.LatLng(27.7017, 85.3206),
        map : map,
        title: 'Nepal, Kathmandu'
    });

    marker.addListener('click', function(){
        infoWindow.setContent(marker.title);
        infoWindow.open(map,marker);
    });

    google.maps.event.addDomListener(window, "resize", function() {
        maps.setCenter(mapOptions.center);
    });

}

//Initialize the map when window loading finished
google.maps.event.addDomListener(window, 'load', initialize);
function initialize() {
    var myLatLng = new google.maps.LatLng(-25.363882, 131.044922);
    var mapOptions = {
        zoom: 4,
        center: myLatLng
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var infowindow = new google.maps.InfoWindow({
        content: 'Change the zoom level',
        position: myLatLng
    });
    infowindow.open(map);

    google.maps.event.addListener(map, 'zoom_changed', function () {
        var zoomLevel = map.getZoom();
        map.setCenter(myLatLng);
        infowindow.setContent('Zoom: ' + zoomLevel);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
    var mapOptions = {
        scaleControl: true,
        center: new google.maps.LatLng(29.5344204, -98.57464870000001),
        zoom: 14
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var marker = new google.maps.Marker({
        map: map,
        position: map.getCenter()
    });

    // Info window object
    var infowindow = new google.maps.InfoWindow();
    infowindow.setContent('USAA, San Antonio');

    // MOUSE OVER EVENT
    google.maps.event.addListener(marker, 'mouseover', function () {
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
var map;
var center = new google.maps.LatLng(29.5344204, -98.57464870000001);

function initialize() {
    var mapProp = {
        center: center,
        zoom: 15,
        panControl: false,
        zoomControl: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    google.maps.event.addListener(map, 'click', function (event) {
        placeMarker(event.latLng);
    });
}

function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        draggable: true,
        icon: 'images/blue-pin1.png',
    });
    var infowindow = new google.maps.InfoWindow({
        content: 'Latitude: ' + location.lat() + '<br> Longitude: ' + location.lng()
    });
    infowindow.open(map, marker);
}


google.maps.event.addDomListener(window, 'load', initialize);

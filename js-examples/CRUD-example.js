var map;
var geocoder;
var alevation;
var markers = [];
var lats = [];
var lngs = [];
var alts = [];
var flag; //Flag to delete each marker

// INITIALIZE THE MAP
function initialize() {
    geocoder = new google.maps.Geocoder();
    var center = new google.maps.LatLng(29.5344204, -98.57464870000001);
    //Define the map options
    var mapOptions = {
        zoom: 14,
        center: center,
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        scaleControl: false,
        streetViewControl: true,
        overviewMapControl: false,
        rotateControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
}

// GEOCODE THE ADDRESS (ADD NEW MARKER)
function codeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            //Define the marker
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                animation: google.maps.Animation.DROP,
                draggable: true,
                icon: "images/red-pin2.png"
            });

            // Get the marker location
            var location = marker.getPosition();
            // Center the map
            map.panTo(location);
            // Show it in the input field
            document.getElementById('txt_latlng').value = location.lat() + ", " + location.lng();

            // Insert the marker into the markers array
            markers.push(marker);

            // CLICK EVENT
            google.maps.event.addListener(marker, 'click', function () {
                // Get marker position
                var pos = marker.getPosition();
                // Center the map
                map.panTo(pos);
                if (flag == 1) {
                    marker.setMap(null);
                    var pos = markers.indexOf(marker);
                    markers.splice(pos, 1);
                    lats.splice(pos, 1);
                    lngs.splice(pos, 1);
                }
            });

            // DRAG END EVENT
            google.maps.event.addListener(marker, 'dragend', function () {
                // Get the actual position, once you drag/drop
                var pos = marker.getPosition();
                // Center the map in the point
                map.panTo(pos);
                // Update the input field with new coordinates
                document.getElementById('txt_latlng').value = pos.lat() + ", " + pos.lng();
            });
        } else {
            alert('Geocode wasn´t found due to: ' + status);
        }
    });
}

// EDIT MARKER
function editMarker() {
    for (var i = 0; i <= markers.length; i++) {
        markers[i].setDraggable(true);
        markers[i].setIcon('images/red-pin2.png');
    }
}

// DELETE MARKER
function deleteMarker() {
    flag = 1; //Delete markers
    for (var i = 0; i <= markers.length; i++) {
        markers[i].setIcon('images/red-pin4.png');
    }

}

// SAVE MARKER
function saveMarker() {
    flag = 0; //Don't delete marker
    lats = []; //Reset latitudes
    lngs = []; //Reset longitudes
    for (var i = 0; i < markers.length; i++) {
        var val = markers[i].getPosition();
        lats.push(val.lat());
        lngs.push(val.lng());
        markers[i].setDraggable(false);
        markers[i].setIcon('images/red-pin1.png');
    }
}

// SHOW MARKER
function showMarkers() {
    for (var i = 0; i < markers.length ; i++) {
        if (lats[i] && lngs[i]) {
            alert('marker[' + i + ']: (' + lats[i] + ', ' + lngs[i] + ')');
        } else {
            alert('You need to click on save to show the saved markers');
        }
    }

}

// LOAD THE MAP
google.maps.event.addDomListener(window, 'load', initialize);

var geocoder;
var map;
var points = [];
var lats = [];
var lngs = [];

// INITIALIZE MAP
function initialize() {
    geocoder = new google.maps.Geocoder();
    var center = new google.maps.LatLng(29.5344204, -98.57464870000001);
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

// CODE ADDRESS
function codeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                animation: google.maps.Animation.DROP,
                draggable: true,
                icon: "images/green-pin2.png"
            });
            // Get the marker position
            var location = marker.getPosition();
            map.panTo(location);
            // Update the text input
            document.getElementById('txt_latlng').value = location.lat() + ", " + location.lng();
            // Insert the marker into the array
            points.push(marker);

            // CLICK EVENT
            google.maps.event.addListener(marker, 'click', function() {
                // Get the position where you drop the marker
                var pos = marker.getPosition();
                // Center the mep in the new position
                map.panTo(pos);
            });

            // DRAG END EVENT
            google.maps.event.addListener(marker, 'dragend', function() {
                // Get the position where you drop the marker
                var pos = marker.getPosition();
                // Center the mep in the new position
                map.panTo(pos);
                // Update the text input
                document.getElementById('txt_latlng').value=pos.lat()+", "+pos.lng();
            });
        } else {
            alert('Geocode wasn´t found due to: ' + status);
        }
    });
}

// DELETE MARKER
function deleteMarker(){
    for (var i = 0; i <= points.length + 1; i++){
        points[0].setMap(null);
        points.shift();
        lats.shift();
        lngs.shift();
    }
}

// CONFIRM MARKER
function confirmMarker(){
    for (var i = 0; i < points.length; i++){
        var val = points[i].getPosition();
        lats.push(val.lat());
        lngs.push(val.lng());
        points[i].setDraggable(false);
        points[i].setIcon('images/green-pin1.png');
    }
}

// SHOW MARKER
function showMarker(){
    for (var i = 0; i < points.length ; i++) {
        if (lats[i] && lngs[i]) {
            alert('marker[' + i + ']: (' + lats[i] + ', ' + lngs[i] + ')');
        } else {
            alert('You need to click on save to show the saved markers');
        }
    }
}

google.maps.event.addDomListener(window, 'load', initialize);

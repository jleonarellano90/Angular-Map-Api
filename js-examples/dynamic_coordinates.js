// Función para inicializar el mapa
function initialize() {
    // Define the center
    var latlng = new google.maps.LatLng(29.5348829, -98.5758339);
    // Set map options
    var myOptions = {
        center: latlng,
        zoom: 13,
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
    // Create a map object with the defined options
    map = new google.maps.Map(document.getElementById("googleMap"), myOptions);
    // Create a marker
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        position: latlng,
        icon: "images/blue-pin1.png"
    });

    // DEFINE THE "DRAGEND" EVENT
    google.maps.event.addListener(marker, 'dragend', function () {
        // Get the actual position
        var point = marker.getPosition();
        // Center the map in the point
        map.panTo(point);
        // Update the input field with new coordinates
        document.getElementById('txt_latlng').value = point.lat() + ", " + point.lng();
    });
}
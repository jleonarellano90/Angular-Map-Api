var map;
var marker;
var center = new google.maps.LatLng(29.5344204, -98.57464870000001);

// INITIALIZE MAP
function initialize() {
    //Map options
    var mapOptions = {
        zoom: 16,
        center: center
    };
    //Map object
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    //Marker object
    marker = new google.maps.Marker({
        map: map,
        icon: 'images/blue-pin1.png',
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: center
    });
    marker.addListener('click', toggleBounce);
}

// CLICK EVENT
function toggleBounce() {
    console.log(marker);
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);

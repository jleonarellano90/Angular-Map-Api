$(document).on("ready", function () {
    //CENTER
    var center = new google.maps.LatLng(29.5344204, -98.57464870000001);

    //CONFIG
    var config = {
        center: center,
        zoom: 15,
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
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    };

    var map = new google.maps.Map(document.getElementById("map"), config);

    //CLICK EVENT
    google.maps.event.addListener(map, "click", function (event) {
        document.getElementById("info").innerHTML = event.latLng;
    });

});

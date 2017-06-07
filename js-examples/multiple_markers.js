// The following example creates complex markers to indicate pointes near
// Sydney, NSW, Australia. Note that the anchor is set to
// (0,32) to correspond to the base of the flagpole.
function initialize() {
    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(29.5344204, -98.57464870000001)
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    setWarehousees(map, Warehousees);
    setClients(map, clients);
};

// Warehouses array
var Warehousees = [
    ['Warehouse 1', 29.5354909329048, -98.57903480529785, 1],
    ['Warehouse 2', 29.53608834741109, -98.57547283172607, 2],
    ['Warehouse 3', 29.531981051404372, -98.57362747192383, 3],
    ['Warehouse 4', 29.53097287143277, -98.57354164123535, 4],
    ['Warehouse 5', 29.53564028686225, -98.5719108581543, 5],
];
// Clients array
var clients = [
    ['Cliente 1', 29.530114043530332, -98.57993602752686, 1],
    ['Cliente 2', 29.53048744786221, -98.57465744018555, 2],
    ['Cliente 3', 29.529441912259085, -98.56980800628662, 3],

];

function setWarehousees(map, locations) {
    //Definir imagen
    var image = {
        url: 'images/box-pin4.png',
        // Image size
        size: new google.maps.Size(48, 48),
        // Image origin
        origin: new google.maps.Point(0, 0),
        // Image width
        anchor: new google.maps.Point(0, 48)
    };
    //Definir formas
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < locations.length; i++) {
        var point = locations[i];
        var myLatLng = new google.maps.LatLng(point[1], point[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image,
            shape: shape,
            title: point[0],
            zIndex: point[3]
        });
    }
}

function setClients(map, locations) {
    // Set image
    var image = {
        url: 'images/blue-pin2.png',
        // Image size
        size: new google.maps.Size(48, 48),
        // Image origin
        origin: new google.maps.Point(0, 0),
        // Image width
        anchor: new google.maps.Point(0, 48)
    };
    // Set shapes
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < locations.length; i++) {
        var point = locations[i];
        var myLatLng = new google.maps.LatLng(point[1], point[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image,
            shape: shape,
            title: point[0],
            zIndex: point[3]
        });
    }
}

google.maps.event.addDomListener(window, 'load', initialize);

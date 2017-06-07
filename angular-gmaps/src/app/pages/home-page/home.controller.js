/**
 * Created by plq1966 on 05/2017.
 */
export default class HomeController {
    /**
     * Constructor class HomeController
     * @param $scope
     * @param mapsService
     */
    constructor($scope, mapsService) {
        this.$scope = $scope;
        this.mapsService = mapsService;
        this.map = {
            center: {
                latitude: 29.5344204,
                longitude: -98.57464870000001
            },
            zoom: 14
        };
        this.marker = {
            id: 0,
            coords: {
                latitude: 29.5344204,
                longitude: -98.57464870000001
            },
            options: {
                draggable: true,
                icon: 'https://cdn0.iconfinder.com/data/icons/gpsmapicons/red/gpsmapicons07.png'
            },
            events: {
                dragend: function (marker, eventName, args) {
                    console.log('Marker dragend:');
                    var lat = marker.getPosition().lat();
                    var lon = marker.getPosition().lng();
                    console.log(lat);
                    console.log(lon);

                    this.marker.options = {
                        draggable: true,
                        labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                        labelAnchor: "100 0",
                        labelClass: "marker-labels"
                    };
                }
            }
        };
    }

}

HomeController.$inject = ['$scope', 'mapsService'];
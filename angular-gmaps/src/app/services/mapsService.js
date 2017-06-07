/**
 * Created by plq1966 on 5/08/2017.
 */
export default class mapsService {
    constructor($http, $state, $window) {
        this.$http = $http;
        this.$state = $state;
        this.$window = $window;
    }


}

mapsService.$inject = ['$http', '$state', '$window'];
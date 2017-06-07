/**
 * Created by plq1966 on 5/08/2017.
 */
export default class AppController {
    constructor($scope, $mdSidenav) {
        this.$scope = $scope;
        this.$mdSidenav = $mdSidenav;
    }

    toggleSidenav(){
        this.$mdSidenav('left').toggle();
    }

    closeSidenav() {
        this.$mdSidenav('left').close();
    }
}

AppController.$inject = ['$scope', '$mdSidenav'];
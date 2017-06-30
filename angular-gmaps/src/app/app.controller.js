/**
 * Created by plq1966 on 5/08/2017.
 */
export default class appController {
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

appController.$inject = ['$scope', '$mdSidenav'];
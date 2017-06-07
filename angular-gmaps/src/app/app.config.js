export default function appConfiguration($stateProvider, $mdIconProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
    // states
    $stateProvider
        .state('public', {
            url: "/public",
            views: {
                'sideNav': {
                    template: '<sh-side-nav></sh-side-nav>'
                }
            }
        })
        .state('home', {
            url: '/home',
            title: 'Home',
            template: '<sh-home></sh-home>'
        })
        .state('authorized', {
            url: '/authorized',
            title: 'Authorized',
            template: '<sh-authorized></sh-authorized>'
        });

    // default
    $urlRouterProvider.otherwise("/home");
    // material design icon stuff
    $mdIconProvider.icon('menu-hamburger', require('../res/icons/menu.svg'));
    // Google Maps config
    uiGmapGoogleMapApiProvider.configure({
        key: '',
        libraries: 'weather, geometry, visualization, drawing'
    });
}

appConfiguration.$inject = ['$stateProvider', '$mdIconProvider', '$urlRouterProvider', 'uiGmapGoogleMapApiProvider'];
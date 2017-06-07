/**
 * Created by plq1966 on 5/08/2017.
 */
import angular from 'angular';
import SideNavController from './sideNav.controller';
import SideNavComponent from './sideNav.component';

export default angular.module('sideNav', [])
    .controller('SideNavController', SideNavController)
    .component("shSideNav", SideNavComponent);

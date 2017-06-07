/**
 * Created by plq1966 on 05/2017.
 */
import angular from 'angular';
import HomeController from './home.controller';
import HomeComponent from './home.component';
import mapsServiceModule from '../../services/mapsService.module';

export default angular.module('home', [
    mapsServiceModule.name
])
    .controller('HomeController', HomeController)
    .component("shHome", HomeComponent);
/**
 * Created by plq1966 on 5/08/2017.
 */
// CSS Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-material/angular-material.css';
import 'babel-polyfill';

// Libraries
import angular from 'angular';
import angularAnimate from 'angular-animate';
import 'angular-simple-logger';
import 'angular-google-maps';
import angularMaterial from 'angular-material';
import angularUIRouter from 'angular-ui-router';

// Modules
import sideNav from './pages/sidenav/sideNav.module';
import home from './pages/home-page/home.module';

// Controllers
import appController from './app.controller.js';

// Configs
import appConfig from './app.config';

// Create our demo module
export default angular.module('AngularMapsApi', [
    angularAnimate,
    angularMaterial,
    angularUIRouter,
    'nemLogging',
    'uiGmapgoogle-maps',
    sideNav.name,
    home.name
])
.controller('appController', appController)
.config(appConfig);

/**
 * Created by plq1966 on 5/08/2017.
 */
// CSS Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-ui-grid/ui-grid.css';
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
import AppController from './app.controller.js';

// Configs
import AppConfig from './app.config';

// Create our demo module
export default angular.module('AngularMapsApi', [
    angularAnimate,
    'nemLogging',
    'uiGmapgoogle-maps',
    angularMaterial,
    angularUIRouter,
    sideNav.name,
    home.name
])
.controller('AppController', AppController)
.config(AppConfig);

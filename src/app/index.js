import angular from 'angular';
import ngRoute from 'angular-route';
import 'bootstrap';

import './style.scss';

import home from './component/board/homeBoard/homeBoard';
import login from './component/board/loginBoard/loginBoard';
import comprehensive from './component/board/comprehensiveBoard/comprehensiveBoard';

import navBar from './component/navBar/navBar';
import list from './component/list/list';
import footer from './component/footer/footer';

import button from './component/button/button';

angular.module('ngApp',[ngRoute])
    .config(($routeProvider, $locationProvider) => {
        $routeProvider
            .when('/', home)
            .when('/login', login)
            .when('/comprehensive', comprehensive)
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
    })
    .component('cNavBar', navBar)
    .component('cList', list)
    .component('cFooter', footer)
    
    .component('cButton', button);
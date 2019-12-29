import angular from 'angular';
import ngRoute from 'angular-route';
import 'bootstrap';

import './style.scss';

import home from './component/board/homeBoard/homeBoard';
import login from './component/board/loginBoard/loginBoard';
import signup from './component/board/signupBoard/signupBoard';
import comprehensive from './component/board/comprehensiveBoard/comprehensiveBoard';
import write from './component/board/writeBoard/writeBoard';
import read from './component/board/readBoard/readBoard';

import navBar from './component/navBar/navBar';
import list from './component/list/list';

import button from './component/button/button';

angular.module('ngApp',[ngRoute])
    .config(($routeProvider, $locationProvider) => {
        $routeProvider
            .when('/', read)
            .when('/login', login)
            .when('/signup', signup)
            .when('/comprehensive', comprehensive)
            .when('/write', write)
            .when('/read', read)
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

    .component('cButton', button);
import angular from 'angular';
import ngRoute from 'angular-route';
import 'bootstrap';

import './style.scss';

import home from './component/board/homeBoard/homeBoard';
import comprehensive from './component/board/comprehensiveBoard/comprehensiveBoard';
import usedMarket from './component/board/usedMarketBoard/usedMarketBoard';

import navBar from './component/bar/navBar/navBar';
import list from './component/list/list';

angular.module('ngApp',[ngRoute])
    .config(($routeProvider, $locationProvider) => {
        $routeProvider
            .when('/',home)
            .when('/comprehensive',comprehensive)
            .when('/usedMarket',usedMarket)
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
    })
    .component('navBar', navBar)
    .component('list', list);
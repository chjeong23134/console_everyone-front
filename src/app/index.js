import angular from 'angular';
import ngRoute from 'angular-route';
import uiRoute from "@uirouter/angularjs";

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

angular.module('ngApp',[uiRoute])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', home);
        $stateProvider.state('login', login);
        $stateProvider.state('signup', signup);
        $stateProvider.state('comprehensive', comprehensive);
        $stateProvider.state('write', write);
        $stateProvider.state('read', read);
    })
    .component('cNavBar', navBar)
    .component('cList', list)

    .component('cButton', button);
'use strict';

require('angular/angular');
require('angular-ui-router');
// require('angular-route');
require('angular-base64');
require('angular-cookies');
require('ng-autocomplete');
require('angular-bootstrap');
require('angular-css');

// Application
var hintonAdminApp = angular.module('hintonAdminApp', ['ui.router', 'base64', 'ngCookies', 'ngAutocomplete', 'ui.bootstrap', 'angularCSS']);

// Services
require('./auth/auth_service')(hintonAdminApp);
require('./services/clear_fields_service')(hintonAdminApp);
require('./services/http_service')(hintonAdminApp);
require('./services/restaurant_service')(hintonAdminApp);
require('./services/google_places_service')(hintonAdminApp);
require('./services/modal_service')(hintonAdminApp);

// Controllers
require('./auth/auth_controller')(hintonAdminApp);
require('./controllers/restaurant_form_controller')(hintonAdminApp);
require('./controllers/modal_instance_controller')(hintonAdminApp);

// Directives
require('./directives/dropdown_directive')(hintonAdminApp);
require('./directives/input_field_directive')(hintonAdminApp);
require('./directives/autofocus_directive')(hintonAdminApp);
require('./directives/thumb_directive')(hintonAdminApp);
require('./directives/on_load_directive')(hintonAdminApp);

// View Routes

hintonAdminApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'templates/client_app.html',
      controller: 'clientAppController',
      css: 'css/client_app.css'
    })
    .state('/admin', {
      url: '/admin',
      templateUrl: 'templates/restaurant_form.html',
      controller: 'restaurantFormController',
      css: 'css/restaurant_form.css'
    })
    .state('/sign_in', {
      templateUrl: 'templates/views/sign_in.html',
      controller: 'authController'
    })
    .state('/create_user', {
      templateUrl: 'templates/views/create_user.html',
      controller: 'authController'
    });

}]);

// hintonAdminApp.config(['$routeProvider', function($routeProvider) {
//   $routeProvider
//     .when('/', {
//       template: 'TEMPLATE',
//       controller: ""
//     })
//     .when('/admin', {
//       templateUrl: 'templates/restaurant_form.html',
//       controller: 'restaurantFormController'
//     })
//     .when('/sign_in', {
//       templateUrl: 'templates/views/sign_in.html',
//       controller: 'authController'
//     })
//     .when('/create_user', {
//       templateUrl: 'templates/views/create_user.html',
//       controller: 'authController'
//     })
//     .otherwise({ redirectTo: '/' });
// }]);

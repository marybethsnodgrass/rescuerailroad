'use strict';

angular.module('rescueRRApp.register', [
  'registerCtrl',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('registerInterceptor');
  });

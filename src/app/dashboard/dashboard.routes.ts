import * as angular from 'angular'
import uiRouter from 'angular-ui-router'

export const dashboardRoutes = angular
  .module('app.dashboard.routes', [
    uiRouter,
  ])
  .config($stateProvider => $stateProvider
    .state('app.dashboard', {
      url: '/dashboard',
      abstract: true,
      template: '<div ui-view></div>',
    })
    .state('app.dashboard.index', {
      url: '',
      component: 'dashboard',
    })
    .state('app.dashboard.about', {
      url: '/about',
      component: 'about',
    })
  )
  .name

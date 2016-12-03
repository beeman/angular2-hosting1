import * as angular from 'angular'
import uiRouter from 'angular-ui-router'

const appTitle = 'Angular 1 + 2'
const navItems = [
  { label: 'Dashboard', sref: 'app.dashboard.index' },
  { label: 'About', sref: 'app.dashboard.about' },
]

export const coreRoutes = angular
  .module('app.core.routes', [
    uiRouter,
  ])
  .config($stateProvider => $stateProvider
    .state('app', {
      url: '',
      abstract: true,
      resolve: {
        appTitle: () => appTitle,
        navItems: () => navItems,
      },
      component: 'appLayout',
    })
  )
  .config($urlRouterProvider => $urlRouterProvider.otherwise('/dashboard'))
  .name

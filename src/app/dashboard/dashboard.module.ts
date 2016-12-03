import * as angular from 'angular'

import { AboutComponent } from './components/about'
import { DashboardComponent } from './components/dashboard'

import { dashboardRoutes } from './dashboard.routes'

export const DashboardModule = angular
  .module('app.dashboard', [
    dashboardRoutes,
  ])
  .component('about', AboutComponent)
  .component('dashboard', DashboardComponent)
  .name

import * as angular from 'angular'
import 'angular-ui-router'
import { CoreModule }  from './core/core.module'

import { DashboardModule } from './dashboard/dashboard.module'

export const AppNg1Module = angular
  .module('app', [
    CoreModule,
    DashboardModule,
  ])
  .run(($trace, $window) => $trace.enable('TRANSITION'))
  .name

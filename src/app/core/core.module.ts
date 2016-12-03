import * as angular from 'angular'

// import 'bootstrap/dist/css/bootstrap.css'

import { CoreComponentsModule } from './core.components'
import { coreRoutes } from './core.routes'

export const CoreModule = angular
  .module('app.core', [
    CoreComponentsModule,
    coreRoutes,
  ])
  .name

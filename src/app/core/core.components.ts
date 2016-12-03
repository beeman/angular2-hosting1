import * as angular from 'angular'

import { AppHeaderComponent } from './components/app-header'
import { AppLayoutComponent } from './components/app-layout'

export const CoreComponentsModule = angular
  .module('app.core.components', [])
  .component('appHeader', AppHeaderComponent)
  .component('appLayout', AppLayoutComponent)
  .name

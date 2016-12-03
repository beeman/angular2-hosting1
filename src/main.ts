import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { environment } from './environments/environment';
import { AppModule } from './app/';

import { AppNg1Module }  from './app/app.ng1.module';


if (environment.production) {
  enableProdMode();
}

// FIXME: Make this work:
//
//  platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
//
// The current construct of getting the reference prevents this error message:
//
// Tried to find bootstrap code, but could not.
// Specify either statically analyzable bootstrap code or pass in an entryModule to the plugins options.


const bootstrapPromise = platformBrowserDynamic().bootstrapModule(AppModule);

bootstrapPromise.then(platformRef => {
  const upgrade = <any>platformRef.injector.get(UpgradeModule) as UpgradeModule;

  upgrade.bootstrap(document.body, [ AppNg1Module ]);
});

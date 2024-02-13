import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { CartState } from './store/states/cart.state';
import { WishListState } from './store/states/wish_list.state';
import { ProductState } from './store/states/products.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      NgxsModule.forRoot([
        CartState,
        WishListState,
        ProductState,
      ]),
      NgxsReduxDevtoolsPluginModule.forRoot()
    ),
  ]
};

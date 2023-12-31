import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './modules/home/pages/home-pages/home-pages.component';

const routes: Routes = [
  {
    path: 'auth',//TODO RUTA INICIAL ES LA LOCALHOST
    loadChildren : () =>import('./modules/auth/auth.module').then((m) => m.AuthModule)   
  },
  {
    path: '',//TODO RUTA INICIAL ES LA LOCALHOST
    component: HomePagesComponent,
    loadChildren : () =>import('./modules/home/home.module').then((m) => m.HomeModule)   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

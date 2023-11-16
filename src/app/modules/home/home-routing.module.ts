import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tracks',//TODO RUTA INICIAL ES LA LOCALHOST
    loadChildren: () => import('../tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path: 'favorites',//TODO RUTA INICIAL ES LA LOCALHOST
    loadChildren: () => import('../favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'favorites',//TODO RUTA INICIAL ES LA LOCALHOST
    loadChildren: () => import('../history/history.module').then(m => m.HistoryModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

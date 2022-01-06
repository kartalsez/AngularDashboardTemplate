import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'menu-item-1', loadChildren: () => import('./pages/temp-module/temp.module').then(m => m.TempModule) },
  // { path: 'menu-item-2', loadChildren: () => import('./pages/temp-module/temp.module').then(m => m.TempModule) },
  // { path: 'menu-item-3', loadChildren: () => import('./pages/temp-module/temp.module').then(m => m.TempModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedireccionadorComponent } from './redireccionador/redireccionador.component';

const routes: Routes = [
  {
    path:'LigaArgentina',
    loadChildren: () => import('./liga-argentina/liga-argentina.module').then(m => m.LigaArgentinaModule),
  },
  {
    path:'team',
    loadChildren: () => import('./team/team.module').then(m => m.TeamModule),
  },
  {
    path:'redireccion',
    component:RedireccionadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

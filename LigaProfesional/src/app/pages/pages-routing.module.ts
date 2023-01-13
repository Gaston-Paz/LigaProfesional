import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'LigaArgentina',
    loadChildren: () => import('./liga-argentina/liga-argentina.module').then(m => m.LigaArgentinaModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

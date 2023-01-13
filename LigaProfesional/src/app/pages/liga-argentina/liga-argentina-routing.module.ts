import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LigaArgentinaComponent } from './liga-argentina.component';

const routes: Routes = [
  {
    path:'',
    component: LigaArgentinaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LigaArgentinaRoutingModule { }

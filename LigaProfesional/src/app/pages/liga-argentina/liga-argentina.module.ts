import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LigaArgentinaRoutingModule } from './liga-argentina-routing.module';
import { LigaArgentinaComponent } from './liga-argentina.component';
import { PagesModule } from '../pages.module';


@NgModule({
  declarations: [
    LigaArgentinaComponent
  ],
  imports: [
    CommonModule,
    LigaArgentinaRoutingModule,
    PagesModule
  ]
})
export class LigaArgentinaModule { }

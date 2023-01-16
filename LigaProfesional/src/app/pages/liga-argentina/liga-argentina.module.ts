import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LigaArgentinaRoutingModule } from './liga-argentina-routing.module';
import { LigaArgentinaComponent } from './liga-argentina.component';
import { PagesModule } from '../pages.module';

import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    LigaArgentinaComponent
  ],
  imports: [
    CommonModule,
    LigaArgentinaRoutingModule,
    PagesModule,
    MatSnackBarModule
  ],
  exports: [
    LigaArgentinaComponent
  ]
})
export class LigaArgentinaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { TitleComponent } from './components/title/title.component';
import {MatDividerModule} from '@angular/material/divider';
import { FixtureComponent } from './components/fixture/fixture.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RedireccionadorComponent } from './redireccionador/redireccionador.component';

@NgModule({
  declarations: [
    TableComponent,
    TitleComponent,
    FixtureComponent,
    RedireccionadorComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatTableModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule
  ],
  exports:[
    TableComponent,
    TitleComponent,
    FixtureComponent,
    
  ]
})
export class PagesModule { }

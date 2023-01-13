import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { TitleComponent } from './components/title/title.component';
import { MenuComponent } from './components/menu/menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { FixtureComponent } from './components/fixture/fixture.component';

@NgModule({
  declarations: [
    TableComponent,
    TitleComponent,
    MenuComponent,
    FixtureComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule
  ],
  exports:[
    TableComponent,
    TitleComponent,
    MenuComponent,
    FixtureComponent
  ]
})
export class PagesModule { }

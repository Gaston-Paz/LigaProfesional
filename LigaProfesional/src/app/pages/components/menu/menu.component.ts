import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { LigaArgentinaComponent } from '../../liga-argentina/liga-argentina.component';
import { ApiFootballService } from '../../../services/api-football.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  list:any[]=[
    {
      text:'Liga Argentina',
      value: 44
    },
    {
      text:'La Liga',
      value: 302
    },
    {
      text:'Premier League',
      value: 152
    },
    {
      text:'Ligue 1',
      value: 168
    },
    {
      text:'Bundesliga',
      value: 175
    },
    {
      text:'Eredivisie',
      value: 244
    },
    {
      text:'Primeira Liga',
      value: 266
    },
    {
      text:'Serie A',
      value: 207
    },
  ]



  mobileQuery!: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private _serviceLiga: ApiFootballService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  cargarLiga(value:any){
    console.log("Id Liga: " , value, " falta ver como conectar cn componente liga");
   
  }

}

import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { LigaArgentinaComponent } from '../../pages/liga-argentina/liga-argentina.component';
import { ApiFootballService } from '../../services/api-football.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

const ACTION_LEAGUES: string = "get_leagues";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  list:any[]=[];
  idNoLigas:string[]=['128','1','2','8','133','166','160'];
  mobileQuery!: MediaQueryList;
  private _mobileQueryListener: () => void;

  @Output() torneo = new EventEmitter<number>();

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private _serviceLiga: ApiFootballService, private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this._serviceLiga.GetLeagues(ACTION_LEAGUES).subscribe(ligas => {
      this.list = ligas.filter(f => !f.league_name.includes("Copa") 
      && !f.league_name.includes("Cup") && !f.league_name.includes("Coppa")
      && !f.league_name.includes("Coupe") 
      && !this.idNoLigas.includes(f.country_id)).sort((a,b) => {
        if (a.country_name > b.country_name) return 1;
      else if (a.country_name < b.country_name) return -1;
      else return 0;
      });
      
    },(error:HttpErrorResponse) => {
      console.log(error);
      
    });
  }

  cargarLiga(value:number){    
    this._serviceLiga.league_id = value;
    this.torneo.emit(value);
  }

}

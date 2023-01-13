import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Team } from '../../interfaces/teams.interface';
import { ApiFootballService } from '../../services/api-football.service';
import { Fixture } from '../../interfaces/fixture.interface';

const ACTION_POSITIONS: string = "get_standings";
const ACTION_FIXTURE: string = "get_events";

@Component({
  selector: 'app-liga-argentina',
  templateUrl: './liga-argentina.component.html',
  styleUrls: ['./liga-argentina.component.css']
})
export class LigaArgentinaComponent implements OnInit {
  
  public ID_LEAGUE:number = 1;
  teams:Team[] = [];
  fixture:Fixture[]=[];
  liga:string = "";
  logo:string = "";
  desde:string = "";
  hasta:string = "";


  constructor(private _apiService:ApiFootballService) { }

  ngOnInit(): void {
    
  }

  setLeague(value:number){
    this.ID_LEAGUE = value;
    let obs: Array<Observable<any>> = [];
    obs.push(this._apiService.GetTabla(ACTION_POSITIONS,this.ID_LEAGUE));
    if(this.ID_LEAGUE === 44){
      this.desde = "2023-01-01";
      this.hasta = "2023-07-31";
    }else{
      this.desde = "2022-07-01";
      this.hasta = "2023-06-30";
    }
    obs.push(this._apiService.GetFixture(ACTION_FIXTURE,this.desde,this.hasta,this.ID_LEAGUE));


    forkJoin(obs).subscribe(resp => {
      let tableFilter: Team[] = [];
      resp[0].forEach((item: Team,index: any)=>{
        if(tableFilter.filter(x =>x.team_id === item.team_id).length === 0) tableFilter.push(item);
      });
      this.liga = tableFilter[0].league_name;
      tableFilter.forEach(t => t.overall_league_DG = parseInt(t.overall_league_GF) - parseInt(t.overall_league_GA));  
      this.teams = tableFilter;       
      this.fixture = resp[1];
      this.logo = this.fixture[0].league_logo;
      
    },(error:HttpErrorResponse) => {
      console.log(error);
      
    });
  }

}

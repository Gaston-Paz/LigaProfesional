import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../interfaces/teams.interface';
import { Fixture } from '../interfaces/fixture.interface';
import { LigaArgentinaComponent } from '../pages/liga-argentina/liga-argentina.component';

const URL: string = "https://apiv3.apifootball.com/";
const API_KEY:string = "1a60d47361159bd1468fce3a419bf1485493f22cd5eadaeb4ad32ee2d8de44b3";

@Injectable({
  providedIn: 'root'
})
export class ApiFootballService {

  league_id:number = 0;
  team_id:number = 0;
  liga:boolean = false;

  constructor(private _http: HttpClient) { }

  GetTabla(action:string){
    return this._http.get<Team[]>(URL + "?action=" + action + "&league_id=" + this.league_id + "&APIkey=" + API_KEY);
  }

  GetFixture(action:string,desde:string,hasta:string){
    return this._http.get<Fixture[]>(URL + "?action=" + action +"&from=" + desde + "&to=" + hasta + "&league_id=" + this.league_id + "&APIkey=" + API_KEY);
  }

  GetLeagues(action:string){
    return this._http.get<any[]>(URL + "?action=" + action + "&APIkey=" + API_KEY);
  }

  GetTeam(action:string){
    return this._http.get<any[]>(URL + "?action=" + action + "&league_id=" + this.league_id + "&APIkey=" + API_KEY);
  }



}

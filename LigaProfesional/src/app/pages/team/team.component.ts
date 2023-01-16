import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFootballService } from '../../services/api-football.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Club } from 'src/app/interfaces/club.interface';

const ACTION_TEAMS: string = "get_teams";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {


  players:any[]=[];
  escudo:string = "";
  nombre:string = "";

  constructor(private router:Router,
    private _serviceApi: ApiFootballService) { }

  ngOnInit(): void {
    if(this._serviceApi.league_id === 0){
      this.router.navigate(['']);
    }

    this._serviceApi.GetTeam(ACTION_TEAMS).subscribe((teams:Club[]) => {
      let listaFiltro = teams.filter(f => parseInt(f.team_key) === this._serviceApi.team_id);
      this.players = listaFiltro[0].players;
      this.escudo = listaFiltro[0].team_badge;
      this.nombre = listaFiltro[0].team_name;
    },(error:HttpErrorResponse) => {
      console.log(error);
      
    })
    
  }

}

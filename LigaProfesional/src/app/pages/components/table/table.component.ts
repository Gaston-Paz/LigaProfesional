import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Team } from '../../../interfaces/teams.interface';
import { ApiFootballService } from '../../../services/api-football.service';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit,  AfterViewInit{

  displayedColumns: string[] = ['position','team','points','matchesWon','lostGames','tiedMatches','goalsFor','goalsAgainst','difference'];
  dataSource = new MatTableDataSource();
  @Input("teams") teams: Team[] = [];
  @Input("logo") logo: string = "";
  liga:string="";

  constructor(private _serivceApi:ApiFootballService, private router:Router) { 
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {      
    this.dataSource.data = this.teams.sort((a:Team,b:Team) => {
      if(parseInt(a.overall_league_position) < parseInt(b.overall_league_position)) return -1;
      else if(parseInt(a.overall_league_position) > parseInt(b.overall_league_position)) return 1;
      else return 0;
    });
    this.liga = this.teams[0].league_name;
  }

  ViewTeam(ev:any){
    this._serivceApi.league_id = parseInt(ev.league_id);
    this._serivceApi.team_id = parseInt(ev.team_id);
    this.router.navigate(['pages/team'])
  }
  

}

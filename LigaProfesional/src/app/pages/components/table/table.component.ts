import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Team } from '../../../interfaces/teams.interface';
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

  constructor() { 
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

  

}

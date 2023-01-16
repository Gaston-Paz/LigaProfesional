import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFootballService } from './services/api-football.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LigaProfesional';
  id_League:number = 0;
  liga:boolean = false;

  constructor(private _apiService:ApiFootballService, private router:Router) { }

  tipoDeTorneo(ev:any){
    if(this._apiService.league_id !== parseInt(ev)){
      this._apiService.league_id = parseInt(ev);
    }

    this.router.navigate(['/pages/redireccion']);

  }

}

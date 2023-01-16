import { Component } from '@angular/core';
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

  constructor(private _apiService:ApiFootballService) { }

  tipoDeTorneo(ev:any){
    if(this.id_League !== ev){
      this.id_League = ev;
      this.liga = false;
    }
    setInterval(() => {
      this.liga = true;
    },500)
  }

}

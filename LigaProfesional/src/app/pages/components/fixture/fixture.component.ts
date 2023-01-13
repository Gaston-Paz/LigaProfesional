import { Component, Input, OnInit } from '@angular/core';
import { Fixture } from 'src/app/interfaces/fixture.interface';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  liga:string="";
  @Input("fixture") fixture: Fixture[] = [];
  dias:string[]=[];
  fechas:number=0;
  fecha:any[][] = [];

  constructor() { }

  ngOnInit(): void {
   

    if(this.fixture[0].league_name.includes("Argentina")){
      this.fixture = this.fixture.filter(x => x.stage_name.trim().includes("1st Phase"));
    }

    this.fechas = parseInt(this.fixture.map(f => f.match_round).sort((a,b) => {
      if(parseInt(a) < parseInt(b)) return 1;
      else if(parseInt(a) > parseInt(b)) return -1;
      else return 0;
    })[0]);

    let fecha1 = this.fixture.filter(x => x.match_round === "1");
    fecha1.forEach(element => {
      let horario = element.match_time;
      let hora = parseInt(horario.split(":")[0]) - 4;
      if(hora < 0){
        hora = 24 + hora;
        let fecha = element.match_date.split("-");
        let dia = parseInt(fecha[2]) - 1;
        element.match_date = fecha[0] + "-" + fecha[1] + "-" + dia;
      }
      element.match_time = hora + ":" + element.match_time.split(":")[1]

      if(!this.dias.includes(element.match_date))this.dias.push(element.match_date);     
      
    });

    this.dias.forEach(d => {
      this.fecha.push(fecha1.filter(f => f.match_date === d))
    });

    

    
  }

}

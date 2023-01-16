import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fixture } from 'src/app/interfaces/fixture.interface';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  liga: string = "";
  @Input("fixture") fixture: Fixture[] = [];
  @Input("jugados") jugados: string = "";
  dias: string[] = [];
  fechas: number = 0;
  fecha: any[][] = [];
  nroFecha: string = "";
  cantFechas: number[] = [];

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {


    if (this.fixture[0].league_name.includes("Argentina")) {
      this.fixture = this.fixture.filter(x => x.stage_name.trim().includes("1st Phase"));
    }
    let ordenamiento = this.fixture.map(f => f.match_round).sort((a, b) => {
      if (parseInt(a) < parseInt(b)) return 1;
      else if (parseInt(a) > parseInt(b)) return -1;
      else return 0;
    });
    this.fechas = parseInt(ordenamiento[0]);

    this.CantidadDeFechas();

    this.FechaActual();

    this.OrdenamientoDeFechaDias();
    
  }

  FechaActual() {
    let menor = 0;
    let primero = true;
    var fechaInicio = new Date().getTime();
    let jugo = parseInt(this.jugados);

    this.fixture.forEach(f => {
      let fecha = parseInt(f.match_round);
      var fechaFin = new Date(f.match_date).getTime();
      var diff = fechaFin - fechaInicio;
      let difDias = parseInt((diff / (1000 * 60 * 60 * 24)).toString());
      if (primero && difDias >= 0 && fecha >= jugo) {
        primero = false;
        menor = difDias;
        this.nroFecha = f.match_round;
      } else if (difDias < menor && difDias >= 0) {
        menor = difDias;
        this.nroFecha = f.match_round;
      } else if (Number.isNaN(jugo)) this.nroFecha = "1";
    });

    if(this.nroFecha === ""){
      this.nroFecha = this.fechas.toString();
    }
    
  }

  OrdenamientoDeFechaDias(nroFecha:number = 0) {
    this.dias = [];
    this.fecha = [];
    if(nroFecha !== 0) this.nroFecha = nroFecha.toString();
    let fecha2 = JSON.stringify(this.fixture.filter(x => x.match_round === this.nroFecha));
    let fecha1 = JSON.parse(fecha2);
    fecha1.forEach((element: { match_time: string; match_date: string; }) => {
      let horario = element.match_time;
      let hora = parseInt(horario.split(":")[0]) - 4;
      if (hora < 0) {
        hora = 24 + hora;
        let fecha = element.match_date.split("-");
        let dia = parseInt(fecha[2]) - 1;
        element.match_date = fecha[0] + "-" + fecha[1] + "-" + dia;
      }
      element.match_time = hora + ":" + element.match_time.split(":")[1]

      let fechaPartida = element.match_date.split("-")[2];
      if(fechaPartida.length === 1){
        element.match_date = element.match_date.split("-")[0] + "-" + element.match_date.split("-")[1] + "-0"+fechaPartida;
      }
      if (!this.dias.includes(element.match_date)) {
        this.dias.push(element.match_date);
      }

    });

    this.dias.forEach(d => {
      this.fecha.push(fecha1.filter((f: { match_date: string; }) => f.match_date === d))
    });
  }

  CantidadDeFechas() {
    for (let index = 1; index <= this.fechas; index++) {
      this.cantFechas.push(index);
    }
  }

  FechaSeleccionada(ev:any){
    this.OrdenamientoDeFechaDias(ev);
    
  }
}

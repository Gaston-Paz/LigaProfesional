import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redireccionador',
  templateUrl: './redireccionador.component.html',
  styleUrls: ['./redireccionador.component.css']
})
export class RedireccionadorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['/pages/LigaArgentina']);
  }


}

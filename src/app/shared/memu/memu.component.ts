import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menuItem.interface';

@Component({
  selector: 'app-memu',
  templateUrl: './memu.component.html',
  styleUrls: ['./memu.component.css']
})
export class MemuComponent implements OnInit {

  menu: MenuItem[] = [
    { ruta: '/graficas/barra', texto: 'Barra' },
    { ruta: '/graficas/barra-doble', texto: 'Barra Dobles' },
    { ruta: '/graficas/dona', texto: 'Dona' },
    { ruta: '/graficas/dona-http', texto: 'Dona Http' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

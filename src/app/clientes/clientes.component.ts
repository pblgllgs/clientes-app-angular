import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id:1, nombre: 'Pablo', apellido:'Gallegos',email:'pbl.gllgs@gmail.com', createAt:'2017-12-11'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

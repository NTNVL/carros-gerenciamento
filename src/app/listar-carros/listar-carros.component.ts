import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CarroService } from '../model/carro.service';
import { Carro } from '../model/carro';

@Component({
  selector: 'app-listar-carros',
  templateUrl: './listar-carros.component.html',
  styleUrls: ['./listar-carros.component.css']
})
export class ListarCarrosComponent {
  formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  constructor(private router: Router, public cs: CarroService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    cs.getCarros();
  }

  getQuantidadeReservadosStr(carro: Carro): string {
    let reservado_text: string;
    if (carro.reservados == 0) {
      reservado_text = '';
    } else if (carro.reservados === 1) {
      reservado_text = ' (1 reservado)';
    } else {
      reservado_text = ` (${carro.reservados} reservados)`;
    }
    
    return carro.quantidade + reservado_text;
  }

  desreservarCarro(carro: Carro) {
    this.cs.desreservarCarro(carro);
    window.setTimeout(() => { this.router.navigate([this.router.url]) }, 500);
  }

  reservarCarro(carro: Carro) {
    this.cs.reservarCarro(carro);
    window.setTimeout(() => { this.router.navigate([this.router.url]) }, 500);
  }

  comprarCarro(carro: Carro) {
    this.cs.comprarCarro(carro);
    window.setTimeout(() => { this.router.navigate([this.router.url]) }, 500);
  }

  venderCarro(carro: Carro) {
    this.cs.venderCarro(carro);
    window.setTimeout(() => { this.router.navigate([this.router.url]) }, 500);
  }
}

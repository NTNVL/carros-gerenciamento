import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { CarroCor, Carro } from '../model/carro';
import { CarroService } from '../model/carro.service';

@Component({
  selector: 'app-adicionar-carro',
  templateUrl: './adicionar-carro.component.html',
  styleUrls: ['./adicionar-carro.component.css']
})
export class AdicionarCarroComponent {
  public cores: string[] = Object.values(CarroCor);

  aparecer: boolean = false;

  carroForm: FormGroup;

  constructor(private router: Router, private cs: CarroService, private fb: FormBuilder) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';

    this.carroForm = this.fb.group({
      modelo: [
        "",
        [
          Validators.required,
          Validators.minLength(3)
         ]
        ],
      cor: [
        "",
      ],
      ano: [
        "",
        [
          Validators.required,
          Validators.min(1800)
        ]
      ],
      preco: [
        "",
        [
          Validators.required
        ]
      ],
      quantidade: [
        "",
        [
          Validators.required
        ]
      ],
    });
  }

  adicionar(modelo: string, cor: CarroCor, ano: number, preco: number, quantidade: number) {
    this.cs.adicionarCarro(new Carro(modelo, cor, ano, preco, quantidade));
    this.aparecer = true;
    window.setTimeout(() => { this.aparecer = false }, 2000);

    window.setTimeout(() => { this.router.navigate([this.router.url]) }, 2500);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Carro } from './carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  BASE_URL: string = 'https://CarrosGerenciamento.ntnvl.repl.co';

  http: HttpClient;

  carros: Carro[] = [];

  constructor(http: HttpClient) {
    this.http = http;
  }

  getCarros() {
    this.carros = []
    const URL = this.BASE_URL + '/carros';

    const get = this.http.get<any>(URL);
    get.subscribe((data) => { data.forEach(i => this.carros.push(i)) });
  }

  getCarrosPresentes(): Carro[] {
    return this.carros.filter((carro) => carro.quantidade > 0);
  }

  adicionarCarro(carro: Carro) {
    const URL = this.BASE_URL + '/carros/post';
    const body = JSON.stringify({carro: carro});
    const post = this.http.post(URL, body, {headers: { 'content-type': 'application/json'}})
    post.subscribe((data) => console.log(data));
  }

  reservarCarro(carro: Carro) {
    const URL = this.BASE_URL + '/carros/post/reservar';
    const body = JSON.stringify({carro: carro});
    const post = this.http.post(URL, body, {headers: { 'content-type': 'application/json'}});
    post.subscribe((data) => console.log(data));
  }

  desreservarCarro(carro: Carro) {
    const URL = this.BASE_URL + '/carros/post/desreservar';
    const body = JSON.stringify({carro: carro});
    const post = this.http.post(URL, body, {headers: { 'content-type': 'application/json'}});
    post.subscribe((data) => console.log(data));
  }

  comprarCarro(carro: Carro) {
    const URL = this.BASE_URL + '/carros/post/comprar';
    const body = JSON.stringify({carro: carro});
    const post = this.http.post(URL, body, {headers: { 'content-type': 'application/json'}});
    post.subscribe((data) => console.log(data));
  }

  venderCarro(carro: Carro) {
    const URL = this.BASE_URL + '/carros/post/vender';
    const body = JSON.stringify({carro: carro});
    const post = this.http.post(URL, body, {headers: { 'content-type': 'application/json'}});
    post.subscribe((data) => console.log(data));
  }
}

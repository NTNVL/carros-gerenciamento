import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdicionarCarroComponent } from '../app/adicionar-carro/adicionar-carro.component';
import { ListarCarrosComponent } from '../app/listar-carros/listar-carros.component'

const routes: Routes = [
  {
  	path: 'listagem',
  	component: ListarCarrosComponent
  },
  {
  	path: 'adicionar',
  	component: AdicionarCarroComponent
  },
  {
    path: '',
    redirectTo: '/listagem',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

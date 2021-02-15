import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DefaultNavbarComponent } from './default-navbar/default-navbar.component';
import { ListarCarrosComponent } from './listar-carros/listar-carros.component';
import { AdicionarCarroComponent } from './adicionar-carro/adicionar-carro.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultNavbarComponent,
    ListarCarrosComponent,
    AdicionarCarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

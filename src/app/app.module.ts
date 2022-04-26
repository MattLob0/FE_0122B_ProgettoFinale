import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingupComponent } from './components/singup/singup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptor } from './interceptors/http.interceptor';
import { LoginComponent } from './components/login/login.component';
import { ListaComponent } from './components/listaUtenti/lista.component';
import { FattureComponent } from './components/fatture/fatture.component';
import { ListaClientiComponent } from './components/lista-clienti/lista-clienti.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DettaglioFattureComponent } from './components/dettaglio-fatture/dettaglio-fatture.component';
import { DettaglioClienteComponent } from './components/lista-clienti/dettaglioCliente/dettaglio-cliente/dettaglio-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingupComponent,
    LoginComponent,
    ListaComponent,
    FattureComponent,
    ListaClientiComponent,
    NavbarComponent,
    DettaglioFattureComponent,
    DettaglioClienteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

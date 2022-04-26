import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioFattureComponent } from './components/dettaglio-fatture/dettaglio-fatture.component';
import { FattureComponent } from './components/fatture/fatture.component';
import { AuthGuard } from './components/guard/auth.guard';
import { HomeComponent } from './components/home/home/home.component';
import { DettaglioClienteComponent } from './components/lista-clienti/dettaglioCliente/dettaglio-cliente/dettaglio-cliente.component';
import { ListaClientiComponent } from './components/lista-clienti/lista-clienti.component';
import { ListaComponent } from './components/listaUtenti/lista.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'signup',
    component: SingupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'lista',
    component: ListaComponent,

  },
  {
    path: 'fatture',
    component: FattureComponent,

  },
  {
    path: 'lista-clienti',
    component: ListaClientiComponent,

  },
  {
    path: 'dettaglio-fatture/:id',
    component: DettaglioFattureComponent,

  },
  {
    path: 'fatture/cliente/:id',
    component: FattureComponent,

  },

  {
    path: 'fatture/:id',
    component: DettaglioFattureComponent,
  },
  {
    path: 'fatture/:id/:idCliente',
    component: DettaglioFattureComponent,
  },
  {
    path: 'dettaglio-cliente',
    component: DettaglioClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

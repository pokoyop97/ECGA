import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component'
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './components/carrito/carrito.component'
import { PrincipalComponent } from './components/principal/principal.component'
import { ComparacionesComponent } from './components/comparaciones/comparaciones.component'
import { PruebasComponent } from './components/pruebas/pruebas.component';

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch:'full'},
    {path: 'home', component: HomeComponent, pathMatch:'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full', },
    {path: 'registro', component: RegistroComponent, pathMatch: 'full', },
    {path: 'cart', component: CarritoComponent, pathMatch:'full'},
    {path: 'logueado', component: PrincipalComponent, pathMatch:'full'},
    {path: 'compa', component: ComparacionesComponent, pathMatch:'full'},
    {path: 'pruebas', component: PruebasComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  
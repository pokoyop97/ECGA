import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component'
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './components/carrito/carrito.component'

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch:'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full', },
    {path: 'registro', component: RegistroComponent, pathMatch: 'full', },
    {path: 'cart', component: CarritoComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  
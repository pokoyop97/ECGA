import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component'
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './components/carrito/carrito.component'
import { ComparacionesComponent } from './components/comparaciones/comparaciones.component'
import { ArmadoComponent } from './components/armado/armado.component';
import { ProcesadorComponent } from './components/armado/procesador/procesador.component';
import { MotherboardComponent } from './components/armado/motherboard/motherboard.component';
import { RamComponent } from './components/armado/ram/ram.component';
import { HddComponent } from './components/armado/hdd/hdd.component';
import { GddrComponent } from './components/armado/gddr/gddr.component';
import { CaseComponent } from './components/armado/case/case.component';
import { PowerComponent } from './components/armado/power/power.component';
import { ResumenComponent } from './components/armado/resumen/resumen.component';
import { Resumen2Component } from './components/armado/resumen2/resumen2.component';

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch:'full'},
    {path: 'home', component: HomeComponent, pathMatch:'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full', },
    {path: 'registro', component: RegistroComponent, pathMatch: 'full', },
    {path: 'cart', component: CarritoComponent, pathMatch:'full'},
    {path: 'compa', component: ComparacionesComponent, pathMatch:'full'},
    {path: 'armado', component: ArmadoComponent, pathMatch:'full'},
    {path: 'procesador/:marca', component: ProcesadorComponent},
    {path: 'motherboard/:modelo',component:MotherboardComponent},
    {path: 'ram',component:RamComponent},
    {path: 'hdd',component:HddComponent},
    {path: 'gddr',component:GddrComponent},
    {path: 'case',component:CaseComponent},
    {path: 'power',component:PowerComponent},
    {path: 'resumen',component:ResumenComponent},
    {path: 'resumen2',component:Resumen2Component}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  
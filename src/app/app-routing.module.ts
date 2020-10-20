import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { QuantityComponent } from './components/quantity/quantity.component';

const routes: Routes = [{ path: 'home',component:HomeComponent ,
children:[{path:'header',component:HeaderComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HeaderComponent,QuantityComponent,HomeComponent ]
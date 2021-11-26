import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PopularComponent } from './popular/popular.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { BiryanisComponent } from './weserve/biryanis/biryanis.component';
import { BurgersComponent } from './weserve/burgers/burgers.component';
import { ColddrinksComponent } from './weserve/colddrinks/colddrinks.component';
import { PizzasComponent } from './weserve/pizzas/pizzas.component';
import { StartersComponent } from './weserve/starters/starters.component';
import { TiffinsComponent } from './weserve/tiffins/tiffins.component';
import { WeserveComponent } from './weserve/weserve.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'speciality',component:SpecialityComponent},
  {path:'popular',component:PopularComponent},
  {path:'amenities',component:AmenitiesComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'cart',component:CartComponent},
  {path:'weserve',component:WeserveComponent,children:[
    {path:'tiffins',component:TiffinsComponent},
    {path:'biryanis',component:BiryanisComponent},
    {path:'starters',component:StartersComponent},
    {path:'colddrinks',component:ColddrinksComponent},
    {path:'pizzas',component:PizzasComponent},
    {path:'burgers',component:BurgersComponent}
  ]},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

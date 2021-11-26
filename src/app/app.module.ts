import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { WeserveComponent } from './weserve/weserve.component';
import { PopularComponent } from './popular/popular.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TiffinsComponent } from './weserve/tiffins/tiffins.component';
import { BiryanisComponent } from './weserve/biryanis/biryanis.component';
import { StartersComponent } from './weserve/starters/starters.component';
import { ColddrinksComponent } from './weserve/colddrinks/colddrinks.component';
import { PizzasComponent } from './weserve/pizzas/pizzas.component';
import { BurgersComponent } from './weserve/burgers/burgers.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ScrolltopComponent } from './scrolltop/scrolltop.component';
import { CartComponent } from './cart/cart.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpecialityComponent,
    WeserveComponent,
    PopularComponent,
    AmenitiesComponent,
    AboutusComponent,
    ContactusComponent,
    TiffinsComponent,
    BiryanisComponent,
    StartersComponent,
    ColddrinksComponent,
    PizzasComponent,
    BurgersComponent,
    PagenotfoundComponent,
    ScrolltopComponent,
    CartComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TooltipModule,
    NgbModule,
    AppRoutingModule,
    OwlModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

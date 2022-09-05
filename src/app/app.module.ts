import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { CardsComponent } from './cards/cards.component';
import { ApiComponent } from './api/api.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    CardsComponent,
    ApiComponent,
    CharacterInfoComponent,
    HomeComponent,
    AboutUsComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

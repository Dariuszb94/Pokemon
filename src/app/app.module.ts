import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PokemonesService} from './services/pokemones.service'
import {POKE_ROUTING} from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PokemonesComponent,
    PokemonInfoComponent,
    SearchPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    POKE_ROUTING,

    
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }

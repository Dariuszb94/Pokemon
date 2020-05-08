import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})

export class PokemonesComponent implements OnInit {

  pokemonData:{} ;
  pokemons:any;

  constructor(private dataService:DataService, private _http:HttpClient, private routes:Router) { }

  /**
   * Initial with header spaced around and displayed searchbar, then intitalize getting the pokemons.
   * Also hiding the message of no internet.
   */
  ngOnInit(): void {
    document.getElementById("header").style.justifyContent = "space-around";
    document.getElementById('searchBar').style.display = 'flex'
    this.getPokemons();
    this.dataService.currentPokemon.subscribe(pokemonData => this.pokemonData = pokemonData); //sharing pokemon info with "pokemon-info-component"
    document.getElementById('noInternet').style.display = 'none'
  }

  /** 
   * Getting 151 pokemons on init
   * @returns {array}
   */ 
  getPokemons(){
    this.dataService.getPokemons()
    .subscribe(
      data => {this.pokemons=data["results"]},
      err =>  document.getElementById('noInternet').style.display = '',
      () => {
        if (this.pokemons)
        this.dataService.pokemonList(this.pokemons);
      }
      );
  }

  /**
  * Get one specific pokemon data from the list
  * @returns {object}
  */
  getOnePokemon(x) {
    this.dataService.fetchOnePokemon(x)
      .subscribe(
        data => { this.pokemonData = data},
        err => console.error(err),
        () => {this.pokemonData;
          this.dataService.changeMessage(this.pokemonData);
          this.routes.navigate(['/pokemon',"info"]);
        }
      );
  }
  
  /**
   * Share pokemonList
   */
  pokemonList() {
    if (this.pokemons)
      this.dataService.pokemonList(this.pokemons);
  }  
}





import { Component, OnInit } from '@angular/core';
import {PokemonesService,PokemonRules} from '../../services/pokemones.service';
import {DataService} from '../../data.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})

export class PokemonesComponent implements OnInit {
  pokemonData:{} ;
  pokemons:[];
  constructor(private _pokemones:PokemonesService, private dataService:DataService, private _http:HttpClient, private routes:Router) { }

  ngOnInit(): void {
    this.getPokemons();
    this.dataService.currentPokemon.subscribe(pokemonData => this.pokemonData = pokemonData); //sharing pokemon info with "pokemon-info-component"
  }

  /*
   * Getting 151 pokemons on init
   * @returns {array}
   */ 
  getPokemons(){
    this.dataService.getPokemons()
    .subscribe(data => this.pokemons=data["results"]);
  }

  /**
  * Get one specific pokemon data from the list
  * @returns {object}
  */
  getOnePokemon(x) {
    this.dataService.fetchOnePokemon(x).subscribe(
        data => { this.pokemonData = data},
          err => console.error(err),
          () => {console.log(this.pokemonData);
            this.dataService.changeMessage(this.pokemonData);
            this.routes.navigate(['/pokemon',"info"]);
          }
        );
        console.log(this.pokemons);
      }     
}





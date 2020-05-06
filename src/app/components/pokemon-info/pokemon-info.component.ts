import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router" 
import {PokemonesService} from "../../services/pokemones.service"
import { DataService} from "../../data.service"
import {PokemonesComponent} from "../pokemones/pokemones.component"
@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {
  pokemonData:any;
  constructor(private ParamsRouter:ActivatedRoute, private pokemonService:PokemonesService, private dataService: DataService) {
   }

pokemonImg:string;
pokemonTypes:any;
pokemonMoves:any;
  ngOnInit(): void {
    this.dataService.currentPokemon.subscribe(pokemonData => this.pokemonData = pokemonData);
    this.assignPokemonInfo();
  }

  /**
   * Write info of pokemon description
   */
  assignPokemonInfo(){
    this.pokemonImg= this.pokemonData.sprites.front_default;
    this.pokemonTypes= this.pokemonData.types;
    this.pokemonMoves= this.pokemonData.moves;
  }
}

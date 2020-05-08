import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router" 
import { DataService} from "../../data.service"

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  pokemonData:any;
  pokemonImg:string;
  pokemonTypes:any;
  pokemonMoves:any;

  constructor(private ParamsRouter:ActivatedRoute, private dataService: DataService) {
   }

  /**
   * Init with centered header and hidden searchbar,
   * share data of current pokemon.
   */
  ngOnInit(): void {
    document.getElementById("header").style.justifyContent = "center";
    document.getElementById('searchBar').style.display = 'none'
    this.dataService.currentPokemon.subscribe(pokemonData => this.pokemonData = pokemonData); 
    this.assignPokemonInfo();
  }

  /**
   * Write info of pokemon description
   */
  assignPokemonInfo(){
    this.pokemonImg= this.pokemonData.sprites.front_default;
    this.pokemonTypes= this.pokemonData.types;  
    this.convertPokemonMoves();
  }

  /**
   * Converte array of pokemon moves from (for example: "big-fireball" to  "big fireball")
   */
  convertPokemonMoves(){
    let pokemonMoves=[];
    for (let i=0; i<3; i++){
      pokemonMoves.push(this.pokemonData.moves[i].move.name.replace(/-/g, " "));
    }
    this.pokemonMoves=pokemonMoves;
  }
}

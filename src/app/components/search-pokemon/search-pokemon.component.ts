import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonesService} from "../../services/pokemones.service";
@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {
pokemon:any[]=[];
  constructor(private params:ActivatedRoute, private pokemones:PokemonesService) {
    this.params.params.subscribe(params=>{
      this.pokemon=this.pokemones.searchPokemon(params['name']);
    })
   }

  ngOnInit(): void {
  }

}

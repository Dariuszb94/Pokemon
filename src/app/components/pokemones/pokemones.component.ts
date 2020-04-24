import { Component, OnInit } from '@angular/core';
import {PokemonesService,PokemonRules} from '../../services/pokemones.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {
  pokemones:PokemonRules[]=[];
  constructor(private _pokemones:PokemonesService) { }

  ngOnInit(): void {
    this.pokemones=this._pokemones.getPokemons();
  }

}

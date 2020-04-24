import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router" 
import {PokemonesService} from "../../services/pokemones.service"
@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {
pokemon:any[]=[];
  constructor(private ParamsRouter:ActivatedRoute, private pokemonService:PokemonesService) {
    this.ParamsRouter.params.subscribe(params=>{
      this.pokemon=this.pokemonService.getPokemon(params['id']);
      
    })
   }



  ngOnInit(): void {
  }

}

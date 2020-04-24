import { Injectable } from '@angular/core';

export interface PokemonRules{
  id:number;
  name:string;
  image:string;
  type:string;
  bio:string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {

  pokemones:PokemonRules[]=[
    {
      "id":0,
      "name":"Bulbasaur",
      "image":"001.jpg",
      "type":"Plant",
      "bio":"111111111111111"
    },
    {
      "id":1,
      "name":"Charmander",
      "image":"002.jpg",
      "type":"Fire",
      "bio":"2222222222222"
    },
    {
      "id":2,
      "name":"Squirtle",
      "image":"003.jpg",
      "type":"Water",
      "bio":"3333333333333"
    },
    {
      "id":3,
      "name":"Pikachu",
      "image":"004.jpg",
      "type":"Electric",
      "bio":"4444444444"
    },

  ];

  getPokemons(){
    return this.pokemones;
  }

  getPokemon(id:number){
    let pokeArr=[];
    for(let pokemon of this.pokemones){
      if(pokemon.id == id){
pokeArr.push(pokemon);
      }
    }

    return pokeArr;
  }
  constructor() { }
}

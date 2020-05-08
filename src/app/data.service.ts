import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { PokemonesComponent } from './components/pokemones/pokemones.component';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  /**
   * Declare shared variables.
   */
  private sourceOfPokemon = new BehaviorSubject('onePokemon');
  currentPokemon = this.sourceOfPokemon.asObservable();

  private listOfPokemons = new BehaviorSubject('listOfPokemons');
  pokemons = this.listOfPokemons.asObservable();
  apiUrl="https://pokeapi.co/api/v2/pokemon?limit=151%27";

  constructor(private _http:HttpClient) {}


  changeMessage(message: any) {
    this.sourceOfPokemon.next(message);
  }

  fetchOnePokemon(e){
    return this._http.get('https://pokeapi.co/api/v2/pokemon/'+e);
  }

  getPokemons(){
    return this._http.get(this.apiUrl);
  }

  searchedPokemon(value){
    return this._http.get('https://pokeapi.co/api/v2/pokemon/'+value)
  }
  
  pokemonList(listOfPokemons: any) {
    this.listOfPokemons.next(listOfPokemons)
  }
}

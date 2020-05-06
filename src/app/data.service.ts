import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private sourceOfPokemon = new BehaviorSubject('onePokemon');
  currentPokemon = this.sourceOfPokemon.asObservable();
  apiUrl="https://pokeapi.co/api/v2/pokemon?limit=151%27";

  constructor(private _http:HttpClient) {}
  changeMessage(message: any) {
    this.sourceOfPokemon.next(message);
  }

  fetchOnePokemon(e){
    return this._http.get('https://pokeapi.co/api/v2/pokemon/'+e)
  }
  getPokemons(){
    return this._http.get(this.apiUrl);
  }
}

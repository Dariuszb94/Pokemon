import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl="https://pokeapi.co/api/v2/pokemon?limit=151%27"
  constructor(private _http:HttpClient) { }
  
  getUsers(){
    return this._http.get<User[]>(this.apiUrl);
  }
}

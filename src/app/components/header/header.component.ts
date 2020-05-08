import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchedPokemon:any;
  pokemons:any;

  constructor(private routes:Router, private dataService:DataService) { }

  /**
   * Hide warning message on init
   */
  ngOnInit(): void {
    this.dataService.pokemons.subscribe(pokemons => this.pokemons = pokemons);
    document.getElementById('warningMessage').style.display = 'none'
  }

  /**
   * Get value from searchbar, go to page of pokemon.
   * Default value of input is pikachu. 
   * Hide warning message.
   * @param value 
   */
  searchPokemon(value:string){
    if (value==""){
    value="pikachu";
  }
    this.dataService.searchedPokemon(value).subscribe(
      data => { this.searchedPokemon = data},
        err =>     document.getElementById('warningMessage').style.display = '',
        () => {console.log(this.searchedPokemon);
          this.dataService.changeMessage(this.searchedPokemon);
          this.routes.navigate(['/pokemon',"info"]);
          document.getElementById('warningMessage').style.display = 'none';
        }
    );
  }
}

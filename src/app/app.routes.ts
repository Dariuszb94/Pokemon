import { RouterModule, Routes } from "@angular/router";
import {PokemonesComponent} from './components/pokemones/pokemones.component'
import {PokemonInfoComponent} from './components/pokemon-info/pokemon-info.component'
const routes: Routes = [
    { path: 'pokemones', component: PokemonesComponent },
    { path: 'pokemon/:id', component: PokemonInfoComponent },
    { path: '**', redirectTo: "pokemones" }
  ];
  

export const POKE_ROUTING = RouterModule.forRoot(routes);
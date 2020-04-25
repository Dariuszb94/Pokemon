import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import {User} from './user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pokemon';
  users$:User[];
  constructor(private dataService:DataService){
 
  }

  ngOnInit(){
  
this.dataService.getUsers()
.subscribe(data => this.users$=data["results"]);



  }
  
}

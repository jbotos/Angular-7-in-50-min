import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //h1Style: boolean = false; 

  // create an instance of it through dependency injection 
  constructor(private data: DataService) { }

  // firstClick() {
  //   //console.log('clicked');
  //   //this.h1Style = true; 
  //   this.data.getUsers(); 
  // }

  // store returned data as an object
  users: object; 

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users)
    })
  }


}

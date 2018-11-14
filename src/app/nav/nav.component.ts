import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // typescript way
  appTitle: string = 'myapp';

  // javascript way, that will work also
  //appTitle = 'myapp';

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { HelloWorld } from '@bit/maxm.bit-bugs.hello-world';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  greeting = HelloWorld();

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage = 'Welcome to the Belegarth Integrated Record Bureau.';
  howToUse = 'Please select a catagory to display.';
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  title = 'my-app';
  number = 0;
  tab = [];
  text: string;
  sumLetterTab = 0;
  constructor() { }

  ngOnInit() {
  }

  reducer = (accumulator, currentValue) => accumulator + currentValue;
  increment() {
    this.number += 1;
  }
  toTable() {
    this.tab.push(this.text);
    this.sumLetterTab = this.tab.reduce(this.reducer).length;
  }
}

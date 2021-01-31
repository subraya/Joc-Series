import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.page.html',
  styleUrls: ['./game-area.page.scss'],
})
export class GameAreaPage implements OnInit {

  db: any = [
    {
      id: 1,
      status: false,
      options: ['abc', 'def'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 2,
      status: false,
      options: ['ghi', 'jkl'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 3,
      status: false,
      options: ['abc', 'def'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 4,
      status: false,
      options: ['ghi', 'jkl'],
      answer: null,
      filename: 'xx.wav'
    }
  ]

  constructor() { 
    console.log('constructing');
  }

  ngOnInit() {
    console.log('inot');
  }

}

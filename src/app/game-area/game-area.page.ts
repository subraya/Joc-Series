import { Component, OnInit } from '@angular/core';
import { DBService } from '../db.service';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.page.html',
  styleUrls: ['./game-area.page.scss'],
})
export class GameAreaPage implements OnInit {

  data: any = [];
  dataReady: boolean;

  constructor(private db: DBService) {}

  ngOnInit() {
    this.db.getAll().then(resp => {
      this.data = resp;
      this.dataReady = true;
    });
  }

}

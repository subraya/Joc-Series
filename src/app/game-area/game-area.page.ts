import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from '../db.service';
//import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.page.html',
  styleUrls: ['./game-area.page.scss'],
})
export class GameAreaPage implements OnInit {

  data: any = [];
  dataReady: boolean;

  constructor(private router: Router, private db: DBService) {}

  ngOnInit() {
    this.db.getAll().then(resp => {
      this.data = resp;
      this.dataReady = true;
    });
  }

  goMain(){
    this.router.navigate(['/home']);
  }

}

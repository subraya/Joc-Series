import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from '../db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private db: DBService) {}

  start(){
    this.router.navigate(['/game-area']);
  }

}

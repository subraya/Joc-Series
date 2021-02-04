import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from '../db.service';
import { QualificationService } from '../qualification.service';
//import { QualificationComponent} from '../qualification/qualification.component'


@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.page.html',
  styleUrls: ['./game-area.page.scss'],
})
export class GameAreaPage implements OnInit {

  data: any = [];
  dataReady: boolean;
  qualification: Object = {};

  constructor(private router: Router, private db: DBService, private qualifier: QualificationService) {}

  ngOnInit() {
    this.db.getAll().then(resp => {
      this.data = resp;
      this.qualification = this.qualifier.evaluate(this.data);
      this.dataReady = true;
    });
  }

  // event listener
  // triggers when a question's status changes
  updateQualification(scoreDiff){
    console.log(this.data[0]);
    this.qualification = this.qualifier.updateQualification(scoreDiff);
  }

  goMain(){
    this.router.navigate(['/home']);
  }

  gameCompleted(){
    return this.qualification['progress'] == '100%';
  }
}

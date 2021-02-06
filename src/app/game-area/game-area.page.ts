import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from '../services/db.service';
import { QualificationService } from '../services/qualification.service';
import { LoaderService } from '../services/loader.service';
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

  constructor(private router: Router, private loader: LoaderService, private db: DBService, private qualifier: QualificationService) {}

  ngOnInit() {}

  ionViewWillEnter(){
    this.dataReady = false;
  }

  // reload db every time, just in case progress was resetted from home
  ionViewDidEnter(){
    this.loader.show('Carregant...').then(() => {
      this.db.getAll().then(resp => {
        this.data = resp;
        this.qualification = this.qualifier.evaluate(this.data);
        this.dataReady = true;
        this.loader.dismiss();
      });
    });
  }

  // event listener
  // triggers when an answer is submitted
  onNewAnswer(ev: any){
    this.updateQualification(ev.scoreDiff);
    this.db.saveQuestion(this.data[ev.id-1]);
  }

  goMain(){
    this.router.navigate(['/home']);
  }

  gameCompleted(){
    return this.qualification['progress'] == '100%';
  }

  private updateQualification(scoreDiff){
    this.qualification = this.qualifier.updateQualification(scoreDiff);
  }
}

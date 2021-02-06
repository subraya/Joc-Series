import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from '../services/db.service';
import { QualificationService } from '../services/qualification.service';
import { LoadingController } from '@ionic/angular';
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

  constructor(private router: Router, private loadingCtrl: LoadingController, private db: DBService, private qualifier: QualificationService) {}

  ngOnInit() {
    this.displayLoader().then(() => {
      this.db.getAll().then(resp => {
        this.data = resp;
        this.qualification = this.qualifier.evaluate(this.data);
        this.dataReady = true;
        this.loadingCtrl.dismiss();
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

  private async displayLoader(){
    let loader = await this.loadingCtrl.create({
      spinner: 'circular',
      message: 'Carregant...'
    });
    await loader.present();

    return loader;
  }

}

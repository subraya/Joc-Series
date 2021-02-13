import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from '../../services/db.service';
import { LoaderService } from '../../services/loader.service';
import { AudioPlayerService } from '../../services/audio-player.service';
import { Qualification } from '../../models/qualification';
import { Question } from '../../models/question';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.page.html',
  styleUrls: ['./game-area.page.scss'],
})
export class GameAreaPage implements OnInit {

  game: Question[];
  dataReady: boolean;
  qualification = new Qualification();

  constructor(private router: Router, private loader: LoaderService, private db: DBService, private player: AudioPlayerService) {}

  ngOnInit() {
    this.player.setFilepathPrefix();
  }

  ionViewWillEnter(){
    this.dataReady = false;
  }

  // reload db every time, just in case progress was resetted from home
  ionViewDidEnter(){
    this.loader.show('Carregant...').then(() => {
      this.db.getAll().then((resp: Question[]) => {
        this.game = resp;
        this.qualification.evaluateGame(this.game);
        this.dataReady = true;
        this.loader.dismiss();
      });
    });
  }

  // event listener
  // triggers when an answer is submitted
  onNewAnswer(ev: Object){
    this.updateQualification(ev['scoreDiff']);
    this.db.saveQuestion(this.game[ev['id']-1]);
  }

  // return to home page
  goMain(){
    this.router.navigate(['/home']);
  }

  gameCompleted(): boolean{
    return this.qualification.isPerfect();
  }

  private updateQualification(scoreDiff: number){
    this.qualification.updateQualification(scoreDiff);
  }
}

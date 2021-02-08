import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DBService } from '../services/db.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  color: string = null;
  allColors: string[] = ['red', 'green', 'blue', 'yellow', 'purple', 'pink'];
  remColors: string[];

  constructor(private router: Router, private alertController: AlertController, private loader: LoaderService, private db: DBService) {}

  ngOnInit(){
    this.reloadColors();
    this.triggerNextColor(this);
  }

  start(){
    this.router.navigate(['/game-area']);
  }

  // display info alert
  async showInfo() {
    const alert = await this.alertController.create({
      cssClass: 'help',
      message: "<ion-icon src=\"assets/icon/question.svg\" slot=\"icon-only\"></ion-icon><p>T'has passat la vida davant la tele? Doncs aquest és el teu joc! 200 melodies. Totes les èpoques, des de grans clàssics fins als temps  actuals. Tots els gèneres, des d'aquelles sèries que veuries una vegada i una altra fins aquelles que et fa vergonya recordar que veies. Ets capaç d'encertar-les totes? </p><p>Els títols tant poden estar en català o en castellà, tal com s'han conegut aquí. Procura escriure'ls bé!<p>",
    });

    await alert.present();
  }

  // display reset alert
  async showReset() {
    const alert = await this.alertController.create({
      cssClass: 'modal-help',
      message: "Esborrar tot el progrés del joc?",
      buttons: [
        { text: 'Esborrar', handler: () => { this.reset(); } },
        { text: 'No esborrar', role: 'cancel' }
      ]
    });

    await alert.present();
  }

  // clear game progress
  private reset(){
    this.loader.show(null).then(() => {
      this.db.reset().then(() => {
        this.loader.dismiss();
      });
    });
  }

  /* logo color animation functions */

  private setLogoColor(color: string){
    this.color = color;
  }

  // restart remaining colors
  private reloadColors(){
    this.remColors = this.allColors.map(color => color);
  }

  private nextColor(){
    let color = this.consumeColor();
    this.setLogoColor(color);
    if(this.remColors.length == 0) this.reloadColors();
    this.triggerNextColor(this);
  }

  private triggerNextColor(page){
    setTimeout(function(){ page.nextColor(); }, 30000); // time matches the css animation's duration
  }

  // consume a color from the remaining colors' list
  private consumeColor(){
    let idx = Math.floor(Math.random() * this.remColors.length);
    return  this.remColors.splice(idx, 1)[0];
  }

}

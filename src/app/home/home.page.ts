import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  color: string = null;
  allColors: string[] = ['red', 'green', 'blue', 'yellow', 'purple', 'pink'];
  remColors: string[];

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit(){
    this.loadColors();
    this.triggerNextColor(this);
  }

  start(){
    this.router.navigate(['/game-area']);
  }

  async showInfo() {
    const alert = await this.alertController.create({
      cssClass: 'help',
      message: "<ion-icon src=\"assets/icon/question.svg\" slot=\"icon-only\"></ion-icon><p>T'has passat la vida davant la tele? Doncs aquest és el teu joc! 200 melodies. Totes les èpoques, des de grans clàssics fins als temps  actuals. Tots els gèneres, des d'aquelles sèries que veuries una vegada i una altra fins aquelles que et fa vergonya recordar que veies. Ets capaç d'encertar-les totes? </p><p>Els títols tant poden estar en català o en castellà, tal com s'han conegut aquí. Procura escriure'ls bé!<p>",
    });

    await alert.present();
  }

  async reset() {
    const alert = await this.alertController.create({
      cssClass: 'help',
      message: "Esborrar tot el progrés del joc?",
      buttons: [
        {
          text: 'Esborrar',
          handler: () => { console.log('clear progress'); }
        },
        {
          text: 'No esborrar',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  private setLogoColor(color: string){
    this.color = color;
  }

  private loadColors(){
    this.remColors = this.allColors.map(color => color);
  }

  private nextColor(){
    let idx = Math.floor(Math.random() * this.remColors.length);
    let color = this.remColors.splice(idx, 1)[0];
    this.setLogoColor(color);
    if(this.remColors.length == 0) this.loadColors();
    this.triggerNextColor(this);
  }

  private triggerNextColor(page){
    setTimeout(function(){ page.nextColor(); }, 30000);
  }

}

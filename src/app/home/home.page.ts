import { Component } from '@angular/core';
import { Media } from '@ionic-native/media/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private media: Media) {}

  public myfunc(){
    console.log('heyyhhhhhh')
    let song = this.media.create('../../assets/audios/alones.mp3');
    song.play();
  }

}

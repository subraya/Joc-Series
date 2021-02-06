import { Injectable } from '@angular/core';
import { MediaObject } from '@ionic-native/media/ngx';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {

  private currentFile: MediaObject;

  constructor() { }

  public play(file: MediaObject){
    this.stopCurrent();
    this.currentFile = file;
    this.currentFile.play();
  }

  private stopCurrent(){
    if(this.currentFile){
      this.currentFile.stop();
    }
  }
}

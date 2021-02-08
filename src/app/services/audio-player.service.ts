import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {
  private filepathPrefix = '../../assets/audios/';
  private currentFile: MediaObject;

  constructor(private platform: Platform, private media: Media) { }

  setFilepathPrefix(){
    if(this.platform.is('android')){
      this.filepathPrefix = '/android_asset/www/assets/audios/';
    }
  }

  loadFile(filename: string): MediaObject{
    return this.media.create(this.filepathPrefix + filename);
  }

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

import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Md5 } from 'ts-md5/dist/md5'; 
import { AudioPlayerService } from '../audio-player.service';
import { CacheService } from '../cache.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {

  @Input('id') id: number;
  @Input('answer') answer: string;
  @Input('options') options: any;
  @Input('status') status: boolean;
  @Input('filename') filename: string;
  file: MediaObject;
  playing: boolean;
  @Output()
  statusChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(private digest: ChangeDetectorRef, private media: Media, private playSrv: AudioPlayerService, private cache: CacheService) {}

  ngOnInit() {}

  play(){
    if(!this.file) this.setupFile();
    this.playSrv.play(this.file);
  }

  private setupFile(){
    this.file = this.media.create('/android_asset/www/assets/audios/'+this.filename);
    this.file.onStatusUpdate.subscribe(status => {
      /* 
        MEDIA_NONE: 0
        MEDIA_PAUSED: 3
        MEDIA_RUNNING: 2
        MEDIA_STARTING: 1
        MEDIA_STOPPED: 4
      */
      if (status == 1 || status == 2) { //player start
        this.playing = true;
        this.digest.detectChanges();
      }

      if (status == 4) { // player end running
        this.playing = false;
        this.digest.detectChanges();
      }
    }); 
  }

  validateAnswer(){
    let found = null;
    let prevStatus = this.status;
    if(this.answer){ 
      found = this.options.find(option => { return option == Md5.hashStr(this.answer); });
    }
    this.status = !!found;
    this.cache.saveQuestion(this);
    if(this.status != prevStatus) {
      this.statusChanged.emit(+!!this.status - Number(prevStatus)); //just trying different ways to cast boolean to number
    }
  }

  // Conditional styles

  statusText(){
    return this.status ? 'CORRECTE' : 'INCORRECTE';
  }

  statusColorClass(){
    return this.status ? 'pass' : 'fail';
  }

}

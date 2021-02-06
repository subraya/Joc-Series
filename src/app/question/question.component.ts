import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Md5 } from 'ts-md5/dist/md5'; 
import { AudioPlayerService } from '../services/audio-player.service';
import { Guess } from '../guess';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {

  @Input('id') id: number;
  @Input('options') options: string[];
  @Input('guess') guess: Guess;
  @Input('filename') filename: string;
  file: MediaObject;
  playing: boolean;
  @Output() onNewAnswer: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(private digest: ChangeDetectorRef, private media: Media, private player: AudioPlayerService) {}

  ngOnInit() {}

  play(){
    if(!this.file) this.setupFile();
    this.player.play(this.file);
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

  processAnswer(){
    let prevStatus = this.guess.status;
    this.validateAnswer();
    this.onNewAnswer.emit({id: this.id, scoreDiff: +!!this.guess.status - Number(prevStatus)});
    //just trying different ways to cast boolean to number
  }

  private validateAnswer(){
    let found = null;
    if(this.guess.answer){ 
      found = this.options.find(option => { return option == Md5.hashStr(this.guess.answer); });
    }
    this.guess.status = !!found;
  }

  // Conditional styles

  statusText(){
    return this.guess.status ? 'CORRECTE' : 'INCORRECTE';
  }

  statusColorClass(){
    return this.guess.status ? 'pass' : 'fail';
  }

}

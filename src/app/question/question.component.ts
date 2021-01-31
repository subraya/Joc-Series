import { Component, OnInit, Input } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
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

  constructor(private media: Media, private playSrv: AudioPlayerService, private cache: CacheService) {}

  ngOnInit() {}

  play(){
    if(!this.file) this.setupFile();
    this.playSrv.play(this.file);
  }

  private setupFile(){
    this.file = this.media.create('../../assets/audios/'+this.filename);
    this.file.onStatusUpdate.subscribe(status => {
      if (status.toString()=="1") { //player start
        this.playing = true;
      }

      if (status.toString()=="4") { // player end running
        this.playing = false;
      }
    }); 
  }

  validateAnswer(){
    let found = null;
    if(this.answer){ 
      found = this.options.find(option => { return option == this.answer; });
    }
    this.status = !!found;
    this.cache.saveQuestion(this);
  }

  statusText(){
    return this.status ? 'CORRECTE' : 'INCORRECTE';
  }

  statusColorClass(){
    return this.status ? 'pass' : 'fail';
  }

}

import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { MediaObject } from '@ionic-native/media/ngx';
import { Md5 } from 'ts-md5/dist/md5'; 
import { AudioPlayerService } from '../../services/audio-player.service';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {

  @Input('question') question: Question;
  private file: MediaObject;
  playing: boolean;
  @ViewChild("txtInput", { static: false }) txtInput: IonInput;
  @Output() onNewAnswer: EventEmitter<Object> = new EventEmitter<Object>();


  constructor(private digest: ChangeDetectorRef, private player: AudioPlayerService) {}

  ngOnInit() {}

  // get and play the audio file
  play(){
    if(!this.file) this.setupFile();
    this.player.play(this.file);
  }

  // validate the answer and notify it
  processAnswer(){
    let prevStatus = this.question.guess.status;
    this.validateAnswer();
    this.onNewAnswer.emit({id: this.question.id, scoreDiff: +!!this.question.guess.status - Number(prevStatus)}); //just trying different ways to cast boolean to number
    this.blurInput();
  }

  // check if the answer is valid
  private validateAnswer(){
    let found = null;
    if(this.question.guess.answer){ 
      found = this.question.options.find(option => { return option == Md5.hashStr(this.question.guess.answer); });
    }
    this.question.guess.status = !!found;
  }

  // create the audio file if it didn't exist before
  private setupFile(){
    this.file = this.player.loadFile(this.question.filename);
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

  // focus out the text input
  // get rid of the keyboard when pressing enter
  private blurInput(){
    this.txtInput.getInputElement().then(
      inputElement => inputElement.blur()
    );
  }

  // Conditional styles

  statusText(): string{
    return this.question.guess.status ? 'CORRECTE' : 'INCORRECTE';
  }

  statusColorClass(): string{
    return this.question.guess.status ? 'pass' : 'fail';
  }

}

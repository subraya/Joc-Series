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
  @ViewChild("ionInput", { static: false }) ionInput: IonInput;
  @Output() onNewAnswer: EventEmitter<Object> = new EventEmitter<Object>();

  private domInput: HTMLInputElement;
  private file: MediaObject;
  private playing: boolean;
  private writing: boolean;

  constructor(private digest: ChangeDetectorRef, private player: AudioPlayerService) {}

  ngOnInit() {}

  ngAfterViewInit(){
    this.ionInput.getInputElement().then(inputElement => {
      this.domInput = inputElement;
      let comp = this;
      this.domInput.onfocus = function(_ev){
        comp.writing = true;
      };
      this.domInput.onblur = function(_ev){
        comp.writing = false;
      };
    });
  }

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
    this.domInput.blur(); // focus out the text input // get rid of the keyboard when pressing enter
  }

  // check if the answer is valid
  private validateAnswer(){
    // NO CHEATING !!!!
    this.question.guess.status = this.question.options.includes(Md5.hashStr((this.question.guess.answer || '').toLowerCase()).toString());
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
      if (status == 1 || status == 2) { // player start
        this.playing = true;
        this.digest.detectChanges(); // enforce this.playing change on view
      }

      if (status == 4) { // player end running
        this.playing = false;
        this.file.release(); // release memory
        this.digest.detectChanges();  // enforce this.playing change on view
      }
    }); 
  }

  // Conditional styles

  isActive(){
    return this.playing || this.writing;
  }

  statusColorClass(): string{
    return this.question.guess.status ? 'pass' : 'fail';
  }

  statusIcon(): string{
    return this.question.guess.status ? 'checkmark-outline' : 'close-outline';
  }
}

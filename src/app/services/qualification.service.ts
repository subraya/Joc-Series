import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  private score: number = 0;
  private progress: number;
  private opinion: string;

  constructor() { }

  evaluate(exam: any[]){
    this.score = exam.filter(question => { return question.guess.status == true; }).length;
    this.calculateProgress();
    this.decideOpinion();
    return this.toOutput();
  }

  updateQualification(scoreDiff: number){
    this.score += scoreDiff;
    this.calculateProgress();
    this.decideOpinion();
    return this.toOutput();
  }

  private toOutput(){
    return {
      progress: String(this.progress*100)+'%',
      opinion: this.opinion
    };
  }

  private calculateProgress(){
    this.progress = this.score/200;
  }

  private decideOpinion(){
    if(this.progress < 0.005) this.opinion = 'comencem?';
    else if(this.progress < 0.125) this.opinion = 'Epic Fail';
    else if(this.progress < 0.250) this.opinion = 'Patata';
    else if(this.progress < 0.375) this.opinion = 'Això és tot?';
    else if(this.progress < 0.500) this.opinion = 'Pequeño saltamontes';
    else if(this.progress < 0.750) this.opinion = 'No està malament';
    else if(this.progress < 0.875) this.opinion = "Ara m'agrades";
    else if(this.progress < 1.000) this.opinion = "Tan cerca y tan lejos";
    else this.opinion = 'Bola extra!'
  }
}

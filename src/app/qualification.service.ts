import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  private score: number = 0;
  private progress: number;
  private opinion: string;

  constructor() { }

  evaluate(exam){
    this.score = exam.filter(question => { return question.status == true; }).length;
    this.calculateProgress();
    this.decideOpinion();
    return {
      progress: String(this.progress)+'%',
      opinion: this.opinion
    };
  }

  calculateProgress(){
    this.progress = this.score/2;
  }

  decideOpinion(){
    this.opinion = "somhi";
  }
}

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
    return this.toOutput();
  }

  updateQualification(scoreDiff){
    this.score += scoreDiff;
    this.calculateProgress();
    this.decideOpinion();
    return this.toOutput();
  }

  private toOutput(){
    return {
      progress: String(this.progress)+'%',
      opinion: this.opinion
    };
  }

  private calculateProgress(){
    this.progress = this.score/2;
  }

  private decideOpinion(){
    this.opinion = "somhi";
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})

export class QualificationComponent implements OnInit {

  private score: number = 0;
  progress: number;
  opinion: string;

  constructor() { }

  ngOnInit() {}

  evaluate(exam){
    this.score = exam.filter(question => { return question.status == true; }).length;
    this.calculateProgress();
    this.decideOpinion();
  }

  calculateProgress(){
    this.progress = this.score/2;
  }

  decideOpinion(){
    this.opinion = "somhi";
  }

}

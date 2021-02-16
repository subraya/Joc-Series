import { Question } from './question';

export class Qualification {
    score: number;
    progress: number;
    opinion: string;

    constructor(){}

    evaluateGame(game: Question[]){
        this.score = game.filter((question: Question) => { return question.guess.status == true; }).length;
        this.evaluateScore();
    }
    
    updateQualification(scoreDiff: number){
        this.score += scoreDiff;
        this.evaluateScore();
    }

    isPerfect(){
        return this.progress == 1;
    }
    
    private evaluateScore(){
        this.calculateProgress();
        this.decideOpinion();
    }
    
    private calculateProgress(){
        this.progress = this.score/200;
    }
    
    private decideOpinion(){
        if(this.progress < 0.005) this.opinion = 'comencem?';
        else if(this.progress < 0.1) this.opinion = "esforça't una mica";
        else if(this.progress < 0.2) this.opinion = 'vergonya aliena';
        else if(this.progress < 0.3) this.opinion = 'ni fred ni calor';
        else if(this.progress < 0.4) this.opinion = 'patata';
        else if(this.progress < 0.5) this.opinion = "t'hi esforces...";
        else if(this.progress < 0.6) this.opinion = "ja em caus millor";
        else if(this.progress < 0.7) this.opinion = 'no et rendeixis!';
        else if(this.progress < 0.8) this.opinion = 'apostoflant';
        else if(this.progress < 0.9) this.opinion = "ets una llegenda";
        else if(this.progress < 1.0) this.opinion = "casa't amb mi";
        else this.opinion = '';
    }
}

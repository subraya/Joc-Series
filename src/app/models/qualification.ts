export class Qualification {
    score: number = 0;
    progress: number;
    opinion: string;

    constructor(){}

    evaluateGame(game: any[]){
        this.score = game.filter(question => { return question.guess.status == true; }).length;
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
        else if(this.progress < 0.125) this.opinion = "esforça't una mica";
        else if(this.progress < 0.250) this.opinion = 'això és tot?';
        else if(this.progress < 0.375) this.opinion = 'Això és tot?';
        else if(this.progress < 0.500) this.opinion = 'patata';
        else if(this.progress < 0.500) this.opinion = 'ni fu ni fa';
        else if(this.progress < 0.750) this.opinion = 'apostoflant';
        else if(this.progress < 0.875) this.opinion = "ets una llegenda";
        else if(this.progress < 1.000) this.opinion = "casa't amb mi";
        else this.opinion = '';
    }
}

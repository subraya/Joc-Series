export class Guess {
    id: number; // didn't want to add the id property to this model, but I wasn't sure of creating another CachedGuess model, either
    answer: string;
    status: boolean;

    constructor(id: number, answer: string, status: boolean){
        this.id = id;
        this.answer = answer;
        this.status = status;
    }

    reset(){
        this.answer = null;
        this.status = false;
    }
}

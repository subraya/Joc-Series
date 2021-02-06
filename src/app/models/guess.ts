export class Guess {
    answer: string;
    status: boolean;

    constructor(answer: string, status: boolean){
        this.answer = answer;
        this.status = status;
    }
}

import { Guess } from './guess';

export class Question {
    id: number;
    filename: string;
    options: string[];
    guess: Guess;

    constructor(id: number, filename: string, options: string[]){
        this.id = id;
        this.filename = filename;
        this.options = options;
        this.guess = new Guess(id, null, false)
    }
}

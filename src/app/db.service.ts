import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  data: any = [
    {
      id: 1,
      status: false,
      options: ['abc', 'def'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 2,
      status: false,
      options: ['ghi', 'jkl'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 3,
      status: false,
      options: ['abc', 'def'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 4,
      status: false,
      options: ['ghi', 'jkl'],
      answer: null,
      filename: 'xx.wav'
    }
  ]

  constructor(private cache: CacheService) { }

  async getAll(): Promise<any[]>{
    this.cache.getAll().then(resp => { 
      resp.forEach(guess => { this.processCachedGuess(guess) }); 
    });
    return this.data
  }

  private processCachedGuess(guess) {
    let question = this.data.find(item => { return item.id == guess.id; });
    question.answer = guess.answer;
    question.status = guess.status;
  }
}

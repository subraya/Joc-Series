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
    },
    {
      id: 5,
      status: false,
      options: ['abc', 'def'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 6,
      status: false,
      options: ['ghi', 'jkl'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 7,
      status: false,
      options: ['abc', 'def'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 8,
      status: false,
      options: ['ghi', 'jkl'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 9,
      status: false,
      options: ['abc', 'def'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 10,
      status: false,
      options: ['ghi', 'jkl'],
      answer: null,
      filename: 'xx.wav'
    }
  ]

  constructor(private cache: CacheService) { }

  async getAll(): Promise<any>{
    return this.prepare().then(resp => {
      return this.data;
    })
  }

  private async prepare(): Promise<any>{
    return this.cache.getAll().then(resp => { 
      resp.forEach(guess => { this.processCachedGuess(guess); }); 
    });
  }

  private processCachedGuess(guess) {
    let question = this.data.find(item => { return item.id == guess.id; });
    console.log(guess)
    console.log(question);
    if(question){
      question.answer = guess.answer;
      question.status = guess.status;
    }
  }
}

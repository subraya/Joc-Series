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
      options: ['900150983cd24fb0d6963f7d28e17f72', '4ed9407630eb1000c0f6b63842defa7d'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 2,
      status: false,
      options: ['826bbc5d0522f5f20a1da4b60fa8c871', '699a474e923b8da5d7aefbfc54a8a2bd'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 3,
      status: false,
      options: ['900150983cd24fb0d6963f7d28e17f72', '4ed9407630eb1000c0f6b63842defa7d'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 4,
      status: false,
      options: ['900150983cd24fb0d6963f7d28e17f72', '699a474e923b8da5d7aefbfc54a8a2bd'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 5,
      status: false,
      options: ['900150983cd24fb0d6963f7d28e17f72', '4ed9407630eb1000c0f6b63842defa7d'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 6,
      status: false,
      options: ['900150983cd24fb0d6963f7d28e17f72', '699a474e923b8da5d7aefbfc54a8a2bd'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 7,
      status: false,
      options: ['900150983cd24fb0d6963f7d28e17f72', '4ed9407630eb1000c0f6b63842defa7d'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 8,
      status: false,
      options: ['900150983cd24fb0d6963f7d28e17f72', '699a474e923b8da5d7aefbfc54a8a2bd'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 9,
      status: false,
      options: ['900150983cd24fb0d6963f7d28e17f72', '4ed9407630eb1000c0f6b63842defa7d'],
      answer: null,
      filename: 'xx.wav'
    },
    {
      id: 10,
      status: false,
      options: ['826bbc5d0522f5f20a1da4b60fa8c871', '699a474e923b8da5d7aefbfc54a8a2bd'],
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

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Guess } from '../models/guess';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})

// CacheService acts as a db client/connector
export class CacheService {

  constructor(private storage: Storage) { }

  saveQuestion(question: Question) {
    let stored = { id: question.id, answer: question.guess.answer, status: question.guess.status };
    this.storage.set(String(question.id), stored);
  }

  public async getAll(): Promise<Guess[]>{
    let data: Array<Guess> = [];
    await this.storage.forEach((v: Object, _key, _i)=>{
      data.push(new Guess(v['id'], v['answer'], v['status']));
    });
    return data;
  }

  reset(): Promise<void>{
    return this.storage.clear();
  }
}

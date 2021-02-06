import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor(private storage: Storage) { }

  saveQuestion(question) {
    let stored = { id: question.id, answer: question.guess.answer, status: question.guess.status };
    this.storage.set(<string>question.id, stored);
  }

  public async getAll(): Promise<any[]>{

    let data: Array<any> = [];
    await this.storage.forEach((v, key, i)=>{
      data.push(v);
    });
    return data;
  }
}

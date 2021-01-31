import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor(private storage: Storage) { }

  saveQuestion(question) {
    let guess = { id: question.id, answer: question.answer, status: question.status };
    this.storage.set(<string>guess.id, guess);
  }

  public async getAll(): Promise<any[]>{

    let data: Array<any> = [];
    await this.storage.forEach((v, key, i)=>{
      data.push(v);
    });
    return data;
  }
}

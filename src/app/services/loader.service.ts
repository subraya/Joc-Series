import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private loader: LoadingController) { }

  public async show(message: string){
    let loader = await this.loader.create({
      spinner: 'circular',
      message: message
    });
    await loader.present();
  }

  public dismiss(){
    this.loader.dismiss();
  }
}

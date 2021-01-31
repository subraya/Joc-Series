import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameAreaPageRoutingModule } from './game-area-routing.module';

import { GameAreaPage } from './game-area.page';

import { QuestionComponent} from '../question/question.component'
import { QualificationComponent} from '../qualification/qualification.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameAreaPageRoutingModule
  ],
  declarations: [GameAreaPage, QuestionComponent, QualificationComponent]
})
export class GameAreaPageModule {}

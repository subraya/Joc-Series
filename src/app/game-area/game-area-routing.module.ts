import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameAreaPage } from './game-area.page';

const routes: Routes = [
  {
    path: '',
    component: GameAreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameAreaPageRoutingModule {}

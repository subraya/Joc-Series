import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameAreaPage } from './game-area.page';

describe('GameAreaPage', () => {
  let component: GameAreaPage;
  let fixture: ComponentFixture<GameAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameAreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

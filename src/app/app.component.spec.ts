import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GameService } from './game.service';
import { CellComponent } from './cell/cell.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CellComponent
      ],
      providers: [
        GameService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should create cell list', () => {
    expect(component.cellList.length).toBe(9);
  });

  it('should have start button', () => {
    const button = fixture.debugElement.nativeElement.querySelector('.btn-start-game');
    expect(button).not.toBeNull();
    expect(button.innerText).toBe('Start New Game');
  });

  it('should show player turn', () => {
    const turnMsg = fixture.debugElement.nativeElement.querySelector('.turn-msg');
    expect(turnMsg.innerText).toContain('1 Player Turn');
  });

});

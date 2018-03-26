import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellComponent } from './cell.component';
import { CellState, Cell } from '../cell';

describe('CellComponent', () => {
  let component: CellComponent;
  let fixture: ComponentFixture<CellComponent>;
  let cellData: Cell;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellComponent);
    component = fixture.componentInstance;
    cellData = {state: CellState.Unchecked, id: 1};
    component.cellData = cellData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create cell element', () => {
    const cell = fixture.debugElement.nativeElement.querySelector('.cell');
    expect(cell).not.toBeNull();
  });

  it('should show x if player 1 clicked on the cell', () => {
    component.cellData = {state: CellState.CheckedByPlayer1, id: 1};
    fixture.detectChanges();
    const cell = fixture.debugElement.nativeElement.querySelector('.cell');
    expect(cell.innerText).toBe('✘');
  });

  it('should show x if player 2 clicked on the cell', () => {
    component.cellData = {state: CellState.CheckedByPlayer2, id: 1};
    fixture.detectChanges();
    const cell = fixture.debugElement.nativeElement.querySelector('.cell');
    expect(cell.innerText).toBe('O');
  });
});

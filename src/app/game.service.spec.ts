import { TestBed, inject } from '@angular/core/testing';

import { GameService } from './game.service';
import { Cell } from './cell';
const cellList: Cell[] = [
  {
    'state': 0,
    'id': 0
  },
  {
    'state': 0,
    'id': 1
  },
  {
    'state': 0,
    'id': 2
  },
  {
    'state': 0,
    'id': 3
  },
  {
    'state': 0,
    'id': 4
  },
  {
    'state': 0,
    'id': 5
  },
  {
    'state': 0,
    'id': 6
  },
  {
    'state': 0,
    'id': 7
  },
  {
    'state': 0,
    'id': 8
  }
];


describe('GameService', () => {
  let gameService: GameService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService]
    });
  });

  beforeEach(() => {
    gameService = TestBed.get(GameService);
  });

  it('should be created', () => {
    expect(gameService).toBeTruthy();
  });

  it('#getWinner should return empty string if no winner', () => {
     const result = gameService.getWinner(cellList, 'player1');
     expect(result).toBe('');
  });

  it('#getWinner should return winner if combination is match', () => {
    expect(getWinner([0, 3, 6])).toBe('Player 1');
    expect(getWinner([1, 4, 7])).toBe('Player 1');
    expect(getWinner([2, 5, 8])).toBe('Player 1');
    expect(getWinner([0, 1, 2])).toBe('Player 1');
    expect(getWinner([0, 4, 8])).toBe('Player 1');
    expect(getWinner([2, 4, 6])).toBe('Player 1');
    expect(getWinner([1, 4, 7, 8])).toBe('Player 1');
    expect(getWinner([0, 3, 4, 8])).toBe('Player 1');
  });

  function getWinner(combination: number[]) {
    const winnerCellList = getWinnerCombination(combination);
    return gameService.getWinner(winnerCellList, 'Player 1');
  }
});



function getWinnerCombination(combination: number[], player = 'player1') {
  return cellList.map((cell, index) => {
    const mapedCell = {...cell};
    if (combination.includes(index)) {
      mapedCell.state = player === 'player1' ? 1 : 2;
    }
    return mapedCell;
  });
}

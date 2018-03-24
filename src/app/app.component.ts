import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { Cell } from './cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cellList: Cell[];
  constructor(private gameService: GameService) {
    this.cellList = this.gameService.getCellList();
   }
}

import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';

@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.scss'],
})
export class TetrisComponent implements OnInit {
  @ViewChild(TetrisCoreComponent)
  private tetris: TetrisCoreComponent;
  score: number;

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.code) {
      case 'ArrowUp':
        this.onRotateButtonPressed();
        break;
      case 'ArrowLeft':
        this.onLeftButtonPressed();
        break;
      case 'ArrowRight':
        this.onRightButtonPressed();
        break;
      case 'ArrowDown':
        this.onDownButtonPressed();
        break;
      default:
        break;
    }
  }

  constructor() {
    this.score = 0;
  }

  ngOnInit() {}

  onLineCleared() {
    this.score++;
    console.log('111', this.score);
  }

  onRotateButtonPressed() {
    this.tetris.actionRotate();
  }

  onLeftButtonPressed() {
    this.tetris.actionLeft();
  }

  onRightButtonPressed() {
    this.tetris.actionRight();
  }

  onDownButtonPressed() {
    this.tetris.actionDown();
  }
}

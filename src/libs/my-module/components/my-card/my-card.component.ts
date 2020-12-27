import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICard } from '../../models/card.models';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {

  @Input() card: ICard;
  @Output() cardButtonClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    // console.log("Clicked", this.card.id);
    this.cardButtonClicked.emit(this.card.id);
  }

}

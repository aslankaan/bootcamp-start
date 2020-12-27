import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICard, IComment } from '../../models/card.models';
import { HttpService } from '../../services/http-service';


@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  cards: ICard[];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getComments().subscribe((comments: IComment[]) => {
      this.cards = comments.map((comment) => {
        return {
          title: comment.name,
          body: comment.body,
          id: comment.id
        }
      })
    })
  }

  handleCardButtonClicked(id) {
    console.log("Container: ", id);
    // this.cards = this.cards.filter((card) => {
    //   return card.id !== id;
    // })
  }

  handleFormSubmit(value) {
    console.log("Container: ", value);
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss']
})
export class NameFormComponent implements OnInit {

  @Output() formSubmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmitClicked(value) {
    this.formSubmit.emit(value);
  }

}

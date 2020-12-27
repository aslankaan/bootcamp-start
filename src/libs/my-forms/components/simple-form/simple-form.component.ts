import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  emailControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.emailControl.valueChanges.subscribe((emailValue) => {
      console.log(emailValue);
    })
  }

  // getErrorMessage() {

    
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   if (this.email.hasError('email')) {
  //     return 'Not a valid email';
  //   }

  //   return '';
  // }

  // handleClick() {
  //   console.log(this.email.value);
  // }

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-team-registration-form',
  templateUrl: './team-registration-form.component.html',
  styleUrls: ['./team-registration-form.component.scss']
})
export class TeamRegistrationFormComponent implements OnInit {

  myForm = this.formBuilder.group({
    email: this.formBuilder.control(null, [Validators.required, Validators.email]),
    name: this.formBuilder.control(null, [Validators.required]),
    // teamMembers: this.formBuilder.array([])
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.myForm.valueChanges.subscribe((formValue) => {
      console.log("Form Value", formValue);
    })

    // this.addTeamMember();
  }


  // get teamMembers() {
  //   return this.myForm.get('teamMembers') as FormArray;
  // }

  // addTeamMember() {
  //   this.teamMembers.push(
  //     this.formBuilder.group({
  //       memberEmail: this.formBuilder.control(null),
  //       memberName: this.formBuilder.control(null),
  //     })
  //   )
  // }

  // handleAddMemberClicked() {
  //   this.addTeamMember();
  // }

}

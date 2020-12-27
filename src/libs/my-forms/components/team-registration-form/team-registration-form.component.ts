import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team-registration-form',
  templateUrl: './team-registration-form.component.html',
  styleUrls: ['./team-registration-form.component.scss']
})
export class TeamRegistrationFormComponent implements OnInit {

  myForm = this.formBuilder.group({
    email: this.formBuilder.control(null, [Validators.required, Validators.email]),
    name: this.formBuilder.control(null, [Validators.required]),
    teamMembers: this.formBuilder.array([])
  })

  subscriptions: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

    this.subscriptions.add(
      this.myForm.valueChanges.subscribe((formValue) => {
        console.log(formValue);
      })
    )

    this.addTeamMember();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }


  get teamMembersControl() {
    return this.myForm.get('teamMembers') as FormArray;
  }

  addTeamMember() {
    this.teamMembersControl.push(
      this.formBuilder.group({
        memberEmail: this.formBuilder.control(null),
        memberName: this.formBuilder.control(null),
      })
    )
  }

  handleAddMemberClicked() {
    this.addTeamMember();
  }

  handleSubmitClicked() {
    console.log(this.myForm.value);
  }

}

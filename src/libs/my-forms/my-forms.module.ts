import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamRegistrationFormComponent } from './components/team-registration-form/team-registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TeamRegistrationFormComponent,
    SimpleFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    TeamRegistrationFormComponent,
    SimpleFormComponent
  ]
})
export class MyFormsModule { }

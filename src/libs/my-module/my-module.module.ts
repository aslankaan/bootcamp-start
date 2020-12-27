import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyModuleRoutingModule } from './my-module-routing.module';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { MyCardComponent } from './components/my-card/my-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http-service';

import { MatButtonModule } from '@angular/material/button';
import { NameFormComponent } from './components/name-form/name-form.component';
import { MatInputModule } from '@angular/material/input';
import { CssExampleComponent } from './components/css-example/css-example.component';
import { FormExampleContainerComponent } from './containers/form-example-container/form-example-container.component';
import { MyFormsModule } from '../my-forms/my-forms.module';
import { RxjsExampleComponent } from './containers/rxjs-example/rxjs-example.component';


@NgModule({
  declarations: [
    HomeContainerComponent,
    MyCardComponent,
    NameFormComponent,
    CssExampleComponent,
    FormExampleContainerComponent,
    RxjsExampleComponent],
  imports: [
    CommonModule,
    MyModuleRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MyFormsModule
  ],
  providers: [
    HttpService
  ]
})
export class MyModuleModule { }

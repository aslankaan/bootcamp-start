import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormExampleContainerComponent } from './containers/form-example-container/form-example-container.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'team' },
  { path: 'home', component: HomeContainerComponent },
  { path: 'team', component: FormExampleContainerComponent }

  // FormExampleContainerComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyModuleRoutingModule { }

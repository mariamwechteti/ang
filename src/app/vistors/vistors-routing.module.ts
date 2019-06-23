import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorListComponent } from './visitor-list/visitor-list.component';

const routes: Routes = [
  {
    path: '',
    component: VisitorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistorsRoutingModule { }

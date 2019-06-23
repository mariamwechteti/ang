import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorEditComponent } from './visitor-edit/visitor-edit.component';

const routes: Routes = [
  {
    path: "", 
    component: VisitorEditComponent,
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitoreRoutingModule { }

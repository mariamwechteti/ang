import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorAddComponent } from './visitor-add/visitor-add.component';

const routes: Routes = [
  {
    path: "", 
    component: VisitorAddComponent,
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitoraRoutingModule { }

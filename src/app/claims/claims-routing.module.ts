import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import {ListComponent} from './list/list.component';
const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'edit', component: EditComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'add', component: AddComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class ClaimsRoutingModule { }

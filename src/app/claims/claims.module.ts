import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClaimsRoutingModule } from './claims-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [AddComponent, EditComponent, DeleteComponent, ListComponent],
  imports: [
    CommonModule, MatIconModule, FormsModule, FlexLayoutModule, MatCardModule,
    ClaimsRoutingModule , FormsModule, ReactiveFormsModule
  ]
})
export class ClaimsModule { }

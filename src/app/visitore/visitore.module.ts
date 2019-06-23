import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButton, MatFormFieldModule, MatInputModule } from '@angular/material';

import { VisitorEditComponent } from './visitor-edit/visitor-edit.component';

import { VisitoreRoutingModule } from './visitore-routing.module';

@NgModule({
  declarations: [VisitorEditComponent],
  imports: [
    CommonModule,
    VisitoreRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
    ],
})
export class VisitoreModule { }

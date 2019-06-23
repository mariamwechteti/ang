import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButton, MatFormFieldModule, MatInputModule,MatCardModule } from '@angular/material';
import { VisitorAddComponent } from './visitor-add/visitor-add.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { VisitoraRoutingModule } from './visitora-routing.module';

@NgModule({
  declarations: [VisitorAddComponent],
  imports: [
    CommonModule,
    VisitoraRoutingModule,MatCardModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatButtonModule, MatFormFieldModule, MatInputModule,FlexLayoutModule
    
  ],
  exports: [
  MatButtonModule, MatFormFieldModule, MatInputModule
  ],
})
export class VisitoraModule { }

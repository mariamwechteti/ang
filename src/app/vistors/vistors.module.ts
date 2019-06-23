import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatToolbarModule, MatToolbar, MatButtonModule, MatButton,MatSortModule , MatMenuModule, MatFormFieldModule, MatInputModule,MatIconModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { VistorsRoutingModule } from './vistors-routing.module';

@NgModule({
  declarations: [VisitorListComponent],
  imports: [
    CommonModule, FlexLayoutModule,
    
    CommonModule,
    FormsModule,MatSortModule ,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,MatIconModule,
    VistorsRoutingModule
  ],
 
  exports: [
    MatCardModule,MatSortModule ,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule
    ]
})
export class VistorsModule { }

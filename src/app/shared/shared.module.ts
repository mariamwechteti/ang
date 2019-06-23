import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitoraModule }  from '../visitora/visitora.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    VisitoraModule,
    FlexLayoutModule

  ],
  exports: [
    VisitoraModule,
    FlexLayoutModule,
  ],
 
})
export class SharedModule { }

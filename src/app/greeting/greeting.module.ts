import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting.component';



@NgModule({
  declarations: [GreetingComponent],
  exports: [GreetingComponent],
  imports: [
    CommonModule
  ]
})
export class GreetingModule { }

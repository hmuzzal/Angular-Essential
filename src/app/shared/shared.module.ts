import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './components/custom-input/custom-input/custom-input.component';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';


@NgModule({
  declarations: [
    CustomInputComponent
  ],
  imports: [
    CommonModule,
    NgZorroModule
   ],
  exports: [
    CommonModule,
    CustomInputComponent,
    NgZorroModule
  ]
})

export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import {
  PhoneManagerComponent
} from './components';

@NgModule({
  declarations: [
    PhoneManagerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    PhoneManagerComponent,
  ]
})
export class SharedModule { }

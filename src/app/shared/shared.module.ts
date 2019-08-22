import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import {
  DropdownComponent,
  PhoneManagerComponent
} from './components';

@NgModule({
  declarations: [
    DropdownComponent,
    PhoneManagerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DropdownComponent,
    PhoneManagerComponent,
  ]
})
export class SharedModule { }

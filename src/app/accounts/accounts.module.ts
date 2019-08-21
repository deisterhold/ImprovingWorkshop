import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  AccountEditorComponent,
} from './components';

@NgModule({
  declarations: [
    AccountEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AccountEditorComponent,
  ]
})
export class AccountsModule { }

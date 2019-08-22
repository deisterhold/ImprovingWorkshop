import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import {
  AccountEditorComponent,
} from './components';

// Modules
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    AccountEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    AccountEditorComponent,
  ]
})
export class AccountsModule { }

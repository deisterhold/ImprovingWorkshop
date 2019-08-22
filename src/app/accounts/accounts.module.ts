import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import {
  AccountEditorComponent,
  AccountListComponent,
} from './components';

// Guards
import { AccountGuard } from './guards';

// Modules
import { SharedModule } from '../shared';
import { AccountsRoutingModule } from './accounts-routing.module';

@NgModule({
  declarations: [
    AccountEditorComponent,
    AccountListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AccountsRoutingModule,
  ],
  exports: [
    AccountEditorComponent,
    AccountListComponent,
  ]
})
export class AccountsModule { }

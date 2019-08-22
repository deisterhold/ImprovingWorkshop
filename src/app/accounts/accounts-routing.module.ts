import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    AccountEditorComponent,
    AccountListComponent,
} from './components';

import { AccountGuard } from './guards';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AccountListComponent },
  { path: 'new', component: AccountEditorComponent },
  { path: ':id', component: AccountEditorComponent, canActivate: [AccountGuard] },
  { pathMatch: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule { }

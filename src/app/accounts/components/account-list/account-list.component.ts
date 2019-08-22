import { Component, OnInit } from '@angular/core';

// Models
import { Account } from '../../../models';

// Services
import { AccountService } from '../../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  public accounts$: Observable<Account[]>;

  constructor(private readonly accounts: AccountService) {
    this.accounts$ = accounts.getAccounts();
  }

  ngOnInit() {
  }

  delete(id: number) {
    this.accounts.deleteAccount(id).subscribe(() => {
      this.accounts$ = this.accounts.getAccounts();
    });
  }
}

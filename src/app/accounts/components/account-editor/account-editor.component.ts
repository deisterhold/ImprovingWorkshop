import { Component, OnInit } from '@angular/core';

import { filter, switchMap, map } from 'rxjs/operators';

// Models
import { Account, Department } from '../../../models';

// Services
import { AccountService } from '../../../services';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-editor',
  templateUrl: './account-editor.component.html',
  styleUrls: ['./account-editor.component.scss']
})
export class AccountEditorComponent implements OnInit {
  public readonly isEdit: boolean;
  public account = new Account();
  public departments: Department[] = [
    new Department(1, 'IT'),
    new Department(2, 'Accounting'),
    new Department(3, 'HR'),
    new Department(4, 'Marketing'),
  ];
  public isSaving: Subscription;

  constructor(private readonly accountRepo: AccountService, private readonly router: Router, private readonly route: ActivatedRoute) {
    this.route.paramMap.pipe(
      filter(p => p.has('id')),
      map((p) => parseInt(p.get('id'), 10)),
      switchMap((id) => accountRepo.getAccount(id)),
    ).subscribe((a) => this.account = a);
  }

  ngOnInit() {
  }

  public save() {
    if (this.account.id) {
      this.isSaving = this.accountRepo.updateAccount(this.account.id, this.account).subscribe((a) => {
        this.account = a;
        this.isSaving = null;
      });
    } else {
      this.isSaving = this.accountRepo.createAccount(this.account).subscribe((a) => {
        this.account = a;
        this.isSaving = null;
        this.router.navigateByUrl('' + a.id);
      });
    }
  }
}

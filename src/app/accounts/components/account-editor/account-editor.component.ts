import { Component, OnInit } from '@angular/core';

// Models
import { Account, Phone, PhoneType, Department } from '../../../models';

// Services
import { AccountService } from '../../../services';

@Component({
  selector: 'app-account-editor',
  templateUrl: './account-editor.component.html',
  styleUrls: ['./account-editor.component.scss']
})
export class AccountEditorComponent implements OnInit {
  public account = new Account();
  public departments: Department[] = [
    new Department(1, 'IT'),
    new Department(2, 'Accounting'),
    new Department(3, 'HR'),
    new Department(4, 'Marketing'),
  ];

  constructor(private readonly accountRepo: AccountService) {
    this.account.phoneNumbers = [
      new Phone('281-555-1234', PhoneType[PhoneType.Home]),
      new Phone('832-555-1234', PhoneType[PhoneType.Mobile]),
      new Phone('713-555-1234', PhoneType[PhoneType.Office]),
    ];
  }

  ngOnInit() {
    this.accountRepo.getAccount(1).subscribe((a) => this.account = a);
  }

}

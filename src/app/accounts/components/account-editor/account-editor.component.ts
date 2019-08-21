import { Component, OnInit } from '@angular/core';

// Models
import { Account, Phone } from '../../../domain';

@Component({
  selector: 'app-account-editor',
  templateUrl: './account-editor.component.html',
  styleUrls: ['./account-editor.component.scss']
})
export class AccountEditorComponent implements OnInit {
  public account = new Account();

  constructor() {
    this.account.name = 'Daniel';
  }

  ngOnInit() {
  }

}

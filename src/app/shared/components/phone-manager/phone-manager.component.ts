import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

// Models
import { Phone, PhoneType } from '../../../models';

@Component({
  selector: 'app-phone-manager',
  templateUrl: './phone-manager.component.html',
  styleUrls: ['./phone-manager.component.scss']
})
export class PhoneManagerComponent implements OnInit {
  public readonly PhoneType = PhoneType;
  public readonly PhoneTypes = Object.keys(PhoneType).filter(i => isNaN(parseInt(i, 10)));
  public selectedPhoneType = this.PhoneTypes[PhoneType.Home];
  private phoneNumbers: Phone[] = [];

  @Output()
  phonesChange = new EventEmitter<Phone[]>();

  @Input()
  get phones(): Phone[] {
    return this.phoneNumbers;
  }

  set phones(values: Phone[]) {
    this.phoneNumbers = values;
    this.phonesChange.emit(this.phoneNumbers);
  }

  constructor() { }

  ngOnInit() {
  }

  public addPhone(phone: string, type: string) {
    const oldPhones = this.phones.slice();
    oldPhones.push(new Phone(phone, type));

    this.phones = oldPhones;
  }
}

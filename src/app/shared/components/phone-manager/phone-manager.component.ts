import { Component, OnInit, Input } from '@angular/core';
import { Phone } from 'src/app/models';

@Component({
  selector: 'app-phone-manager',
  templateUrl: './phone-manager.component.html',
  styleUrls: ['./phone-manager.component.scss']
})
export class PhoneManagerComponent implements OnInit {
  @Input() phones: Phone[] = [];

  constructor() { }

  ngOnInit() {
  }

}

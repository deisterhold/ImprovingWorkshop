import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent<T = any> implements OnInit {
  private dropdownModel: T;

  @Input() public get model() {
    return this.dropdownModel;
  }

  public set model(val) {
    this.dropdownModel = val;
    this.modelChange.emit(val);
  }

  @Output() modelChange = new EventEmitter<T>();

  @Input() public options: T[] = [];

  constructor() { }

  ngOnInit() {
  }

}

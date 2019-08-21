import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  @Input() color = '';
  @HostBinding('class.red') get red() { return this.color === 'red'; }
  @HostBinding('class.lightgreen') get lightgreen() { return this.color === 'lightgreen'; }
  @HostBinding('class.darkgreen') get darkgreen() { return this.color === 'darkgreen'; }
  @HostBinding('class.yellow') get yellow() { return this.color === 'yellow'; }
  @HostBinding('class.blue') get blue() { return this.color === 'blue'; }

  constructor() { }

  ngOnInit() {
  }

}

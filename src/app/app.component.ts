import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly dimensions = new FormGroup({
    width: new FormControl(6),
    height: new FormControl(5),
  });

  constructor() {
  }
}

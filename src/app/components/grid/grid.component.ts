import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnChanges {
  @Input() width: number;
  @Input() height: number;
  public readonly colors = ['red', 'lightgreen', 'darkgreen', 'yellow', 'blue'];
  public rows: string[][];

  ngOnInit() {
    this.generateRows();
  }

  ngOnChanges() {
    this.generateRows();
  }

  public generateRows() {
    this.rows = [];
    let index = 0;
    for (let y = 0; y < this.height; y++) {
      this.rows.push([]);

      for (let x = 0; x < this.width; x++) {
        this.rows[y].push(this.colors[index]);
        index = (index + 1) % this.colors.length;
      }
    }
  }
}

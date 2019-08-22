import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { GridComponent } from './grid/grid.component';
import { RowComponent } from './row/row.component';

import { AccountsModule } from './accounts';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    GridComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AccountsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
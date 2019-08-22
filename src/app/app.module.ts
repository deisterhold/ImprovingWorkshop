import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  BoxComponent,
  GridComponent,
  RowComponent,
} from './components';

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
    HttpClientModule,
    ReactiveFormsModule,
    AccountsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

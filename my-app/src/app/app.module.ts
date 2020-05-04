import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { EnglishBooksComponent } from './english-books/english-books.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReadbookComponent } from './readbook/readbook.component';
import { WritebookComponent } from './writebook/writebook.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    EnglishBooksComponent,
    ReadbookComponent,
    WritebookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

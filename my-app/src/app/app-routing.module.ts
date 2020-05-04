import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnglishBooksComponent } from './english-books/english-books.component';
import { HomeComponent } from './home/home.component';
import { ReadbookComponent } from './readbook/readbook.component';
import { WritebookComponent } from './writebook/writebook.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'books/:lang',component:EnglishBooksComponent},
  {path:'read-book/:id/:num',component:ReadbookComponent},
  {path:'write-book',component:WritebookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

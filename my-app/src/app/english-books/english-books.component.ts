import { Component, OnInit } from '@angular/core';
import { ContactService } from "../contact.service";
import { Contact } from "../contact";
import { Observable } from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-english-books',
  templateUrl: './english-books.component.html',
  styleUrls: ['./english-books.component.css'],
  providers:[ContactService]
})
export class EnglishBooksComponent implements OnInit {
  contacts:Contact[];
  contact:Contact;
  _id:String;
  genre:String;
  name:String;
  image:String;
  author:String;
  story:String;
  lang:String;
  navStart: Observable<Object>;
  constructor(private contactService:ContactService,private _Activatedroute:ActivatedRoute) { 
        console.log(this.lang);

   }

  ngOnInit() {
    this._Activatedroute.params.subscribe(params => {
      this.lang = params['lang'];
  });

    this.contactService.getContacts().
    subscribe(contacts=>this.contacts=contacts); 
  }

}

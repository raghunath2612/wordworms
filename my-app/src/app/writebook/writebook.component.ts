import { Component, OnInit } from '@angular/core';
import { ContactService } from "../contact.service";
import { Contact } from "../contact";
import { Observable } from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-writebook',
  templateUrl: './writebook.component.html',
  styleUrls: ['./writebook.component.css'],
  providers:[ContactService]

})
export class WritebookComponent implements OnInit {
  contacts:Contact[];
  contact:Contact;
  _id:String;
  name:String;
  language:String;
  genre:String;
  image:String;
  author:String;
  story:String;
  navStart: Observable<Object>;
  constructor(private contactService:ContactService,private router:Router) { }

  addbook(){
    var contacts=this.contacts;
    const newContact={
      name:this.name,
      language:this.language,
      genre:this.genre,
      image:this.image,
      author:this.author,
      story:this.story
    }
    console.log(newContact);
    this.contactService.addContact(newContact)
    .subscribe();
    this.router.navigate(['/']);

  }
  ngOnInit() {
  }

}

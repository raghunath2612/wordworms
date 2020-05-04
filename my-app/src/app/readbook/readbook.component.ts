import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ContactService } from "../contact.service";
import { Contact } from "../contact";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-readbook',
  templateUrl: './readbook.component.html',
  styleUrls: ['./readbook.component.css'],
  providers:[ContactService]

})
export class ReadbookComponent implements OnInit {
  contacts:Contact[];
  contact:Contact;
  _id:String;
  name:String;
  language:String;
  image:String;
  author:String;
  story:String;
  navStart: Observable<Object>;
  id:String;
  math = Math;
  num:String;
  numm:Number;
  $scope="siss,sdns";
  constructor(private _Activatedroute:ActivatedRoute,private contactService:ContactService) { }

  showbook(id:any){
    var contacts=this.contacts;
    

    
    }

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this._Activatedroute.params.subscribe(params => {
      this.num = params['num'];
      this.numm=Number(this.num);
    })
    this.contactService.getContacts().
    subscribe(contacts=>this.contacts=contacts);
  }

}

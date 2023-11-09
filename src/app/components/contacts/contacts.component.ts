import { Component, OnInit } from '@angular/core';
import { contact, contacts } from './contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: contact[] = contacts;

  ngOnInit(): void {
  }
}

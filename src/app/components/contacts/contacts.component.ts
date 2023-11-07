import { Component } from '@angular/core';
import { contact, contacts } from './contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts:contact[]=contacts;
}

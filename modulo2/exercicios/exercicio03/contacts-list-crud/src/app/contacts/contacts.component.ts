import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  listContacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe(contacts => {
      if (contacts.length > 0) {
        contacts.forEach(contact => {
          this.listContacts.push(contact);
        });
      }
    }, error => {
      console.log(error);
    });
  }

}

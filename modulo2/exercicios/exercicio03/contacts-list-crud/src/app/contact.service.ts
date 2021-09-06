import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl: string = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  getContacts() {
    return this.httpClient.get<Contact[]>(this.baseUrl + "contacts?_sort=name");
  }

  getContactById(id: number) {
    return this.httpClient.get<Contact>(this.baseUrl + "contacts/" + id);
  }

  createContact(contact: Contact) {
    return this.httpClient.post<Contact>(this.baseUrl + "contacts", contact);
  }

  updateContact(contact: Contact) {
    return this.httpClient.put<Contact>(this.baseUrl + "contacts/" + contact.id, contact);
  }

  deleteContact(id: number) {
    return this.httpClient.delete(this.baseUrl + "contacts/" + id);
  }
}

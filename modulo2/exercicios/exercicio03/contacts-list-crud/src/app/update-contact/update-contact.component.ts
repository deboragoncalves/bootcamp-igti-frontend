import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  id: any;

  updateContactForm: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required)
  });

  constructor(private router: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContactId();
  }

  getContactId(): void {
    this.router.paramMap.subscribe(paramMap => {
      if (paramMap) {
        this.id = paramMap.get("id");
        this.getContact(this.id);
      }
    }, error => {
      console.log(error);
    });
  }

  getContact(id: any): void {
    this.contactService.getContactById(id).subscribe(contact => {
      // Reset - valores form

      this.updateContactForm.reset(contact);
    });
  }

  updateContact(): void {
    console.log("entrou");
  }

}

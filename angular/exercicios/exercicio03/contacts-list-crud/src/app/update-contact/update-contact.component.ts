import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContactId();
  }

  getContactId(): void {
    this.activatedRouter.paramMap.subscribe(paramMap => {
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

    let contact = {
      id: this.id,
      ... this.updateContactForm.value
    };

    this.contactService.updateContact(contact).subscribe(updateContact => {

      // Resetar
      this.updateContactForm.reset(contact);

      this.router.navigate(["/contacts"]);
    }, error => {
      console.log(error);
    });
  }

}

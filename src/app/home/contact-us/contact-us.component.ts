import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttprequestService } from 'src/app/httprequest.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  firstName = '';
  lastName = '';
  country = '';
  message = '';
  isSubmitted: boolean = false;
  @ViewChild('formSubmit')  form: NgForm;
  httpRequest : HttprequestService = inject(HttprequestService);

  onSubmitClick(form: NgForm) {
    this.isSubmitted= true;
    this.httpRequest.postContact(form.value);
    form.reset();
  }
}

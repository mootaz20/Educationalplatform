import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttprequestService } from '../httprequest.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
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


  canExit(){
    if((this.firstName || this.lastName || this.country || this.message) && !this.isSubmitted){
      return confirm('Are you sure want to exit?');
    }else{
      return true;
    }
      
  }
}

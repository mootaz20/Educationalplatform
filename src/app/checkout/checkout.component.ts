import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../Models/Courses';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  activeRoute : ActivatedRoute = inject(ActivatedRoute);
  course : Course;

  ngOnInit(): void {
   this.course = history.state ;
   console.log("history state",this.course);
  }

}

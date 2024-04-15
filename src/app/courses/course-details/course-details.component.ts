import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/Models/Courses';
import { CoursesService } from 'src/app/courses.service';
import { HttprequestService } from 'src/app/httprequest.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  courseServies: CoursesService = inject(CoursesService);
  selectedCourse: Course;
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  unsub : Subscription;
  router : Router = inject(Router);
  httpRequest : HttprequestService = inject(HttprequestService);
  ngOnInit(): void {
    this.unsub = this.activeRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      this.selectedCourse = this.httpRequest.Courses.find(data => data.id === +id);
    });
  }
  ngOnDestroy(): void {
    this.unsub.unsubscribe();
  }
}

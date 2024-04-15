import { Component, OnInit, inject } from '@angular/core';
import { Course } from 'src/app/Models/Courses';
import { CoursesService } from 'src/app/courses.service';
import { HttprequestService } from 'src/app/httprequest.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  // courses : CoursesService = inject(CoursesService);
  httpRequest : HttprequestService = inject(HttprequestService);
  allCourses : Course[] ;
  popularCourses : Course[];
  isLoader : boolean = true;
  ngOnInit(): void {
    this.httpRequest.getAllCourses().subscribe((data : Course[]) =>{
      console.log("Popular component data",data);
      this.allCourses= data;
      console.log(this.allCourses);
      this.popularCourses = this.allCourses.filter(course => course.id < 4);
      this.isLoader = false;
    })
  }
}

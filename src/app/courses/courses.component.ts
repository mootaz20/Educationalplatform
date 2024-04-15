import { Component, OnInit, inject } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../Models/Courses';
import { ActivatedRoute } from '@angular/router';
import { HttpRequest } from '@angular/common/http';
import { HttprequestService } from '../httprequest.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: CoursesService = inject(CoursesService);
  allCourses : Course[];
  // searchCourse: Course[];
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  httpService : HttprequestService = inject(HttprequestService);
  isLoader : boolean = true;
  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((data) => {
      let searchValue = data.get('search');
      if (searchValue == null || searchValue == '' || searchValue == undefined) {
        this.httpService.getAllCourses().subscribe((response: Course[])=>{
          console.log("Response received");
          this.allCourses= response;
          this.isLoader = false;
        })
      }else{
        this.httpService.getAllCourses().subscribe((response: Course[])=>{
          console.log("Response received");
          this.allCourses= response.filter(course => course.title.toLowerCase().
          includes(searchValue!.toLowerCase()));
          this.isLoader = false;
        })
        
       }

    })
  }
}



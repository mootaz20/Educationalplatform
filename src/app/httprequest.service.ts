import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from './Models/Courses';

@Injectable({
  providedIn: 'root'
})
export class HttprequestService {
    http : HttpClient = inject(HttpClient);
    Courses : Course[];

    getAllCourses(): Observable<Course[]> {
      return this.http.get('https://educational-platform-71670-default-rtdb.firebaseio.com/Course.json')
      .pipe(map((res)=>{
        let courses : Course[]= [];
        let i = 1;
        for(let key in res){
          if(res.hasOwnProperty(key)){
            courses.push({...res[key], key: key, id:  i});
            i++;
          }
        } 
        this.Courses = courses;
        return courses;
      }));
    }

    postContact(data){
      return this.http.post('https://educational-platform-71670-default-rtdb.firebaseio.com/Contact.json',data)
      .subscribe((res)=>{
        console.log('send succffuly');
      })
    }
}

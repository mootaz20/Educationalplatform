import { Injectable } from '@angular/core';
import { Course } from './Models/Courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private description: string = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
  dolore eu fugiat nulla pariatur."`;

  courses: Course[] = [
    { id: 1, title: 'Complete Modern JavaScript Course', price: 499, desc: this.description, image: '../../../assets/download.jfif', rating: 4.5, duration: 18.2, author: 'Steve smith' },
    { id: 2, title: 'A complete Angular Course', price: 599, desc: this.description, image: '../../../assets/download.jfif', rating: 4.9, duration: 20.8, author: 'Sarah King' },
    { id: 3, title: 'A Complete Node JS Bootcamp', price: 449, desc: this.description, image: '../../../assets/download.jfif', rating: 3.7, duration: 16.6, author: 'Mark Vought' },
    { id: 4, title: 'A Complete React Developer Course', price: 599, desc: this.description, image: '../../../assets/download.jfif', rating: 4.8, duration: 28.2, author: 'Sarah King' },
    { id: 5, title: 'ASP.NET Core with Web API', price: 649, desc: this.description, image: '../../../assets/download.jfif', rating: 3.5, duration: 34.4, author: 'Steve smith' },
    { id: 6, title: 'Froentend Development with Vue.js', price: 329, desc: this.description, image: '../../../assets/download.jfif', rating: 4.5, duration: 17.7, author: 'Steve smith' },
    { id: 7, title: 'A Complete Python Bootcamp', price: 469, desc: this.description, image: '../../../assets/download.jfif', rating: 3.4, duration: 32.6, author: 'Mark Vought' },
    { id: 8, title: 'Machine Learning with Python', price: 1299, desc: this.description, image: '../../../assets/download.jfif', rating: 4.8, duration: 26.7, author: 'Sarah King' },
  ];

  getAllCourses(){
    return this.courses;
  }

}

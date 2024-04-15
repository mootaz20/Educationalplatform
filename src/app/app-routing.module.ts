import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { CanActivateChild } from './auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent , canDeactivate : [(comp : ContactComponent) => {return comp.canExit()}]},
  {path: 'about', component: AboutComponent},
  {path: 'courses', component: CoursesComponent,},
  {path: 'courses', canActivateChild: [CanActivateChild] ,children: [
    {path: 'course/:id',component: CourseDetailsComponent },
    {path: 'checkout',component: CheckoutComponent},
  ]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../user.service';
import { AuthServicesService } from '../auth-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authService : AuthServicesService = inject(AuthServicesService);
  router : Router = inject(Router);
  ngOnInit(): void {
    alert('please Enter  your username = js and password = 12345 Thank you 😁❤');
  }
  onSubmitClick(username , password)  {
    if(this.authService.login(username,password)){
      alert("Logged in successfully");
      this.router.navigate(['courses']);
    }else{
      alert("Invalid username or password");
    }
  }
}

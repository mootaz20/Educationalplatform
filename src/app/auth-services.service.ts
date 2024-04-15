import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  user : UserService = inject(UserService);
  isLogged : boolean = false;
  router : Router = inject(Router);
  login(username,password){
    let logUser = this.user.users.find(user => user.username === username && 
                                                user.password === password );
    if(logUser){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    return logUser;
  }

  logout(){
    this.isLogged = false;
    this.router.navigate(['login']);
  }
  getIsLogged(){
    return  this.isLogged;
  }
}

import { inject } from "@angular/core"
import { AuthServicesService } from "./auth-services.service"
import { Router } from "@angular/router";

export const CanActivateChild = () => {
   const authService = inject(AuthServicesService);
   const router : Router = inject(Router);
   if(authService.getIsLogged()){
    return true; 
   }else{
    alert('you must login to  access this page');
    router.navigate(['login']);
    return false;

   }
    
}
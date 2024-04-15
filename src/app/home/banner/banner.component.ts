import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  router : Router = inject(Router);
 

  onButtonClick(value){
   this.router.navigate(['courses'],{queryParams: {'search': value}})
  }
}

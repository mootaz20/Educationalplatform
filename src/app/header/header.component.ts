import { Component, inject } from '@angular/core';
import { AuthServicesService } from '../auth-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  authService : AuthServicesService = inject(AuthServicesService);

  onLinkClick(){
    this.authService.logout();
  }
}

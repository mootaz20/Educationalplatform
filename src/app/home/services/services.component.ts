import { Component, OnInit, inject } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services : ServicesService = inject(ServicesService);
  allServices = this.services.services;
  ngOnInit(): void {
    console.log(this.allServices);
  }
}

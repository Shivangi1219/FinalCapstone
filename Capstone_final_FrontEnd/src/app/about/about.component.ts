import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {NotificationService} from "../service/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   email = '';
     
      constructor(private userService: UserService,
                private notify: NotificationService,
                private router: Router) {
    }

    ngOnInit() {
     this.email = localStorage.getItem('email');
  }
}

import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {NotificationService} from "../service/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

     email = '';
     
      constructor(private userService: UserService,
                private notify: NotificationService,
                private router: Router) {
    }

  
   ngOnInit() {
   this.email = localStorage.getItem('email');
  }

}

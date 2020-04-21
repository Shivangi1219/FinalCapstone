import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {NotificationService} from "../service/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

    email = '';
     
      constructor(private userService: UserService,
                private notify: NotificationService,
                private router: Router) {
    }

   ngOnInit() {
     this.email = localStorage.getItem('email');
  }
}

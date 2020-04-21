import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {NotificationService} from "../service/notification.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    users: any = {};

    constructor(private userService: UserService,
                private notify: NotificationService,
                private router: Router) {
    }

  ngOnInit() {
  }
  
  
  onSignUp() {
      console.log('users', this.users);
      this.userService.userSignUp(this.users)
          .subscribe((res) => {
              console.log('res', res);
              this.router.navigate(['/login']);
          }, error => {
              this.notify.showError(error.message);
                console.log('error', error);
          })
  }

}

import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {NotificationService} from "../service/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

      users: any = {};
      email : string;
      password : string;

    constructor(private userService: UserService,
                private notify: NotificationService,
                private router: Router) {
    }

  ngOnInit() {
  
  }
  
  onLogin(){
      console.log('users', this.users);
        this.userService.userLogin(this.users).subscribe((res) => {
                console.log('res', res);
                if (res) {
                    this.notify.showSuccess('Login Successfully..!');
                    localStorage.setItem('email', res[0].email);
                    this.router.navigate(['/home']);
                } 
            }, error => {
                this.notify.showError(error.message);
                console.log('error', error);
            });

            if(this.users.email == "admin" && this.users.password == "admin"){
              this.router.navigate(['/adminhome']);
            }

    }

    onSignUp() {
        this.router.navigate(['/register']);
    }

}

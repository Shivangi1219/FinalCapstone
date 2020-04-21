import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {NotificationService} from "../service/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    email = '';
     
      constructor(private userService: UserService,
                private notify: NotificationService,
                private router: Router) {
    }
    
  ngOnInit() {
  this.email = localStorage.getItem('email');
  this.loadStripe();
  }

  loadStripe() {    
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
}

pay(amount) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Payment',
      amount: amount * 100
    });
 
}
}

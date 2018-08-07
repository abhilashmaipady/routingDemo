import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  signup() {
    if (this.username !== '' && this.password !== '') {
      this.router.navigateByUrl('/login');
    }
  }
}

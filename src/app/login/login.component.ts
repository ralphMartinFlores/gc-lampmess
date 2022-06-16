import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checked = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Show/Hide Password
  onChange(e: { checked: any; }) {
    if (e.checked) {
      var password = (<HTMLInputElement>document.getElementById("password-field")).type = "text";
    }
    else {
      var password = (<HTMLInputElement>document.getElementById("password-field")).type = "password";
    }
  }

}

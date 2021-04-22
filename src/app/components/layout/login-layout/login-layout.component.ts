import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {

  loginForm: any;
  loginData: any;

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {

    this.buildForm();
    let jwtHelper = new JwtHelperService();
    console.log(jwtHelper);
   }

  buildForm()
  {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  get f() { return this.loginForm.controls; }


  onSubmit(){
    let userName = this.loginForm.controls['username'].value;
    let password = this.loginForm.controls['password'].value;
    this._loginService.login(userName, password).subscribe(response => {
      let access = response["access"];
      let jwtHelper = new JwtHelperService();
      localStorage.setItem('token',jwtHelper.decodeToken(access));

    })
  }
}

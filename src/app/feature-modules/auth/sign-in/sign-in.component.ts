import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserCredential} from "../../../api/model/model";
import {AppAuthService} from "../../../service/auth/app-auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public authForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private appService: AppAuthService
  ) {
  }

  ngOnInit(): void {
    ;
  }

  onSubmit() {
    //TODO implement sign in logic;

    if (this.authForm.valid) {
      const credential: UserCredential = {
        username: this.authForm.get('username')?.value,
        password: this.authForm.get('password')?.value,
      }
      this.appService.authenticate(credential)
        .subscribe(authResponse => {
          console.log(authResponse);
        });
    }
  }

}

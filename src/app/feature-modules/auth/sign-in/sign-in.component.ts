import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public authForm:FormGroup= this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],
  });

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
;
  }

  onSubmit(){
    //TODO implement sign in logic;

    if (this.authForm.valid){
      console.log(this.authForm.value);
    }
  }

}

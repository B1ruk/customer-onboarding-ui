import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {OnboardingServiceService} from "../../../api/service/onboarding-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  public applicationForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    public toastrService: ToastrService,
    public onboardingService: OnboardingServiceService, private route: ActivatedRoute
  ) {
    this.applicationForm = this.fb.group({
      id: [null],
      purpose: ['', Validators.required],
      companyName: ['', Validators.required],
      entityType: ['', Validators.required],
      businessActivity: ['', Validators.required],
      countryOfIncorporation: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      dateOfIncorporation: ['', Validators.required],
      directorName: ['', Validators.required],
      passportNumber: ['', Validators.required],
      applicantName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

  }

  ngOnInit(): void {
  }

  onApplicationSubmit(){
    this.onboardingService.createApplication({
      ...this.applicationForm.value
    })
      .subscribe(resp => {
        if (resp) {
          this.toastrService.success('Created','Application');
        }
      })

  }



}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Application} from "../../../api/model/model";
import {OnboardingServiceService} from "../../../api/service/onboarding-service.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {APP_ROLE} from "../../../api/api-config";

@Component({
  selector: 'app-onboarding-detail',
  templateUrl: './onboarding-detail.component.html',
  styleUrls: ['./onboarding-detail.component.scss']
})
export class OnboardingDetailComponent implements OnInit {

  applicationForm: FormGroup;
  application: Application | null | undefined;
  id: string | null = null;

  constructor(private fb: FormBuilder,
              public toastrService: ToastrService,
              public onboardingService: OnboardingServiceService, private route: ActivatedRoute) {
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
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.loadApplication();
    });

  }

  private loadApplication() {
    if (this.id != null) {
      this.onboardingService.getApplication(this.id)
        .subscribe(data => {
          this.application = data;
          this.applicationForm.patchValue({
            id: this.application.id,
            purpose: this.application.purpose,
            companyName: this.application.companyName,
            entityType: this.application.entityType,
            businessActivity: this.application.businessActivity,
            countryOfIncorporation: this.application.countryOfIncorporation,
            registrationNumber: this.application.registrationNumber,
            dateOfIncorporation: this.application.dateOfIncorporation,
            directorName: this.application.directorName,
            passportNumber: this.application.passportNumber,
            applicantName: this.application.applicantName,
            email: this.application.email
          })
        })
    }

  }

  public updateApplicationStatus(status: string) {
    const role=sessionStorage.getItem(APP_ROLE);

    if (role=='PROCESSOR'){
      if (status=='ACCEPTED'){
        status='PROCESSING_ACCEPTED';
      }else{
        status='PROCESSING_rejected';
      }
    }

    this.applicationForm.value
    const updatedApplication = {
      ...this.applicationForm.value, status
    }

    this.onboardingService.updateApplication(updatedApplication)
      .subscribe(resp => {
        if (resp) {
          this.toastrService.success('Updated','Application');
        }
      })
  }

}

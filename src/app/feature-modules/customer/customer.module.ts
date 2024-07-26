import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';


@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerLayoutComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }

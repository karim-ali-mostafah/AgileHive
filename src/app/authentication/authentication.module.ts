import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {MatFormFieldModule } from '@angular/material/form-field';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { HttpClientModule } from '@angular/common/http';
import { FogetPassComponent } from './foget-pass/foget-pass.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';  
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgxWebstorageModule } from 'ngx-webstorage';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    OtpComponent,
    FogetPassComponent
  ],
  exports:[LoginComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgxWebstorageModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }

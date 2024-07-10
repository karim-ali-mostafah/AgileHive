import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { OrgHeaderComponent } from './org-header/org-header.component';


@NgModule({
  declarations: [
    PublicHeaderComponent,
    OrgHeaderComponent,
    BackToTopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PublicHeaderComponent,
    BackToTopComponent,
    OrgHeaderComponent
  ]
})
export class PartialsModule { }

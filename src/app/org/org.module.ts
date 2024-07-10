import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgRoutingModule } from './org-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';
import { OrgViewComponent } from './org-view/org-view.component';
import { DialogComponent } from './dialog/dialog.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { PeopleViewComponent } from './people-view/people-view.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTabsModule } from '@angular/material/tabs';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    IndexComponent,
    OrgViewComponent,
    DialogComponent,
    ProjectViewComponent,
    PeopleViewComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    OrgRoutingModule,
    SharedModule,
    MatGridListModule,
    NgxDatatableModule
  ],
  providers: [DatePipe]
})
export class OrgModule { }

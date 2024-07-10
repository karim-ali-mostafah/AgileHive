import { Component } from '@angular/core';
import { OrgProjects } from '../services/org-projects';
import { DialogComponent, DialogData } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Data } from '@angular/router';

@Component({
  selector: 'app-org-view',
  templateUrl: './org-view.component.html',
  styleUrls: ['./org-view.component.css']
})
export class OrgViewComponent {

  item: DialogData | undefined;
  projects:OrgProjects[]=[
    new OrgProjects('Organization 1', 100, new Date('2023-01-01'), new Date('2023-12-01')),
    new OrgProjects('Organization 2', 100, new Date('2023-01-01'), new Date('2023-12-01')),
    new OrgProjects('Organization 3', 100, new Date('2023-01-01'), new Date('2023-12-01'))
    ];
    
    constructor(private dialog: MatDialog){}

    //private dialog: MatDialog
    addOrg(orgdata:Data) {
      let newOrg = new OrgProjects(orgdata['org_name'], orgdata['no_of_people'],new Date('2023-12-01'),new Date('2023-12-01'));
      this.projects.push(newOrg);
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '275px',
        data: {org_name: ''}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.addOrg(result);
        }
      });
    }
}

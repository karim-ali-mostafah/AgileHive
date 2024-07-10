import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-people-view',
  templateUrl: './people-view.component.html',
  styleUrls: ['./people-view.component.css']
})

export class PeopleViewComponent {
  //current Users
  rows = [
    { name: 'John Doe', role: 'Developer', joined_at: new Date(2020, 1, 1), salary_per_hr: '20', working_hours: '8' },
    { name: 'Alice Smith', role: 'Manager', joined_at: new Date(2019, 3, 15), salary_per_hr: '25', working_hours: '7' },
    { name: 'Bob Johnson', role: 'Designer', joined_at: new Date(2021, 8, 10), salary_per_hr: '18', working_hours: '9' },
    { name: 'Emily Brown', role: 'Engineer', joined_at: new Date(2020, 5, 20), salary_per_hr: '22', working_hours: '6' },
    { name: 'Michael Wilson', role: 'Analyst', joined_at: new Date(2018, 11, 5), salary_per_hr: '30', working_hours: '8' },
    { name: 'Michael Wilson', role: 'Analyst', joined_at: new Date(2018, 11, 5), salary_per_hr: '30', working_hours: '8' },
    { name: 'Sophia Lee', role: 'Tester', joined_at: new Date(2022, 2, 25), salary_per_hr: '15', working_hours: '7' }
  ];
  columns = [
    { prop: 'name', name: 'Name' },
    { prop: 'role', name: 'Role' },
    { prop: 'joined_at', name: 'Joined At' , pipe: { transform: this.formatDate } },
    { prop: 'salary_per_hr', name: 'Salary Per Hour' },
    { prop: 'working_hours', name: 'Working Hours' }
  ];
  //Invited Users
  rows2 = [
    {email: 'example1@example.com', invited_at: new Date(2020, 1, 1), status: 'Accepted'},
    {email: 'example2@example.com', invited_at: new Date(2020, 1, 1), status: 'Pending'},
  ]

  columns2 = [
    { prop: 'email', name: 'Email' },
    { prop: 'invited_at', name: 'Invited At', pipe: { transform: this.formatDate }  },
    { prop: 'status', name: 'Status' }
  ];

  isEditing = false;
  editingRowIndex: number;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  formatDate(date: Date) {
    const formattedDate = new Date(date);
    return formattedDate.toDateString();
  }
  startEditing(rowIndex: number) {
    
  }

  deleteRow(rowIndex: number) {
    
  }

  saveChanges(rowIndex: number) {
    
  }

  cancelEditing(rowIndex: number) {
  
  }

  deleteRow2(rowIndex: number) {
    this.rows2.splice(rowIndex, 1);
  }
}

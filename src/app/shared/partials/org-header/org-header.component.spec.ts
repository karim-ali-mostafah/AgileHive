import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgHeaderComponent } from './org-header.component';

describe('OrgHeaderComponent', () => {
  let component: OrgHeaderComponent;
  let fixture: ComponentFixture<OrgHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

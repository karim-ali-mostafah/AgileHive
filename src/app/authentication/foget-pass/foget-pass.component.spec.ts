import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FogetPassComponent } from './foget-pass.component';

describe('FogetPassComponent', () => {
  let component: FogetPassComponent;
  let fixture: ComponentFixture<FogetPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FogetPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FogetPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

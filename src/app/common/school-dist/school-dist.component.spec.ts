import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDistComponent } from './school-dist.component';

describe('SchoolDistComponent', () => {
  let component: SchoolDistComponent;
  let fixture: ComponentFixture<SchoolDistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolDistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancementComponent } from './enhancement.component';

describe('EnhancementComponent', () => {
  let component: EnhancementComponent;
  let fixture: ComponentFixture<EnhancementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnhancementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

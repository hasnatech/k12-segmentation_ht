import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSegmentationComponent } from './customer-segmentation.component';

describe('CustomerSegmentationComponent', () => {
  let component: CustomerSegmentationComponent;
  let fixture: ComponentFixture<CustomerSegmentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSegmentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSegmentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

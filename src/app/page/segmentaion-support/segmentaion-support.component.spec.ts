import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentaionSupportComponent } from './segmentaion-support.component';

describe('SegmentaionSupportComponent', () => {
  let component: SegmentaionSupportComponent;
  let fixture: ComponentFixture<SegmentaionSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentaionSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentaionSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

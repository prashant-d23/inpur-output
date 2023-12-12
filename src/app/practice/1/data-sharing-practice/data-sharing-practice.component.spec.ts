import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSharingPracticeComponent } from './data-sharing-practice.component';

describe('DataSharingPracticeComponent', () => {
  let component: DataSharingPracticeComponent;
  let fixture: ComponentFixture<DataSharingPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSharingPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSharingPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

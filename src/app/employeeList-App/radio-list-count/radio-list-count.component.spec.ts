import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioListCountComponent } from './radio-list-count.component';

describe('RadioListCountComponent', () => {
  let component: RadioListCountComponent;
  let fixture: ComponentFixture<RadioListCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioListCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioListCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

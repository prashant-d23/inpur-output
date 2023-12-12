import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCounterComponent } from './send-counter.component';

describe('SendCounterComponent', () => {
  let component: SendCounterComponent;
  let fixture: ComponentFixture<SendCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

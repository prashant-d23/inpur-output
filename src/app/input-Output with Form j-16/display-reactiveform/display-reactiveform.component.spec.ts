import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReactiveformComponent } from './display-reactiveform.component';

describe('DisplayReactiveformComponent', () => {
  let component: DisplayReactiveformComponent;
  let fixture: ComponentFixture<DisplayReactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayReactiveformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

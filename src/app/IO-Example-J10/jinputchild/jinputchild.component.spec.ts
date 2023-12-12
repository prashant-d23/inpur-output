import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JinputchildComponent } from './jinputchild.component';

describe('JinputchildComponent', () => {
  let component: JinputchildComponent;
  let fixture: ComponentFixture<JinputchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JinputchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JinputchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

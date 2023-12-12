import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoutputparentComponent } from './joutputparent.component';

describe('JoutputparentComponent', () => {
  let component: JoutputparentComponent;
  let fixture: ComponentFixture<JoutputparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoutputparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoutputparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

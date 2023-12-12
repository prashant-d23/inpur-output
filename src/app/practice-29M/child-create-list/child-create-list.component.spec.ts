import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCreateListComponent } from './child-create-list.component';

describe('ChildCreateListComponent', () => {
  let component: ChildCreateListComponent;
  let fixture: ComponentFixture<ChildCreateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCreateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCreateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

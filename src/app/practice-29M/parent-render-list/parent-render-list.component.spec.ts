import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRenderListComponent } from './parent-render-list.component';

describe('ParentRenderListComponent', () => {
  let component: ParentRenderListComponent;
  let fixture: ComponentFixture<ParentRenderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentRenderListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentRenderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

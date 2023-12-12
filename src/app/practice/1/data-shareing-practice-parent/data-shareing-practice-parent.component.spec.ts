import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataShareingPracticeParentComponent } from './data-shareing-practice-parent.component';

describe('DataShareingPracticeParentComponent', () => {
  let component: DataShareingPracticeParentComponent;
  let fixture: ComponentFixture<DataShareingPracticeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataShareingPracticeParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataShareingPracticeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

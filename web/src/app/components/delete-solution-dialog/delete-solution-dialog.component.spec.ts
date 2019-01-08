import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSolutionDialogComponent } from './delete-solution-dialog.component';

describe('DeleteSolutionDialogComponent', () => {
  let component: DeleteSolutionDialogComponent;
  let fixture: ComponentFixture<DeleteSolutionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSolutionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSolutionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizableColumnComponent } from './resizable-column.component';

describe('ResizableColumnComponent', () => {
  let component: ResizableColumnComponent;
  let fixture: ComponentFixture<ResizableColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizableColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

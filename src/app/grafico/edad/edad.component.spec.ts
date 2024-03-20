import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdadComponent } from './edad.component';

describe('EdadComponent', () => {
  let component: EdadComponent;
  let fixture: ComponentFixture<EdadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

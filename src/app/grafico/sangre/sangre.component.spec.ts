import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangreComponent } from './sangre.component';

describe('SangreComponent', () => {
  let component: SangreComponent;
  let fixture: ComponentFixture<SangreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SangreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SangreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

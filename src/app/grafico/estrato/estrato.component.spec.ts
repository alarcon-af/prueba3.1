import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstratoComponent } from './estrato.component';

describe('EstratoComponent', () => {
  let component: EstratoComponent;
  let fixture: ComponentFixture<EstratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstratoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

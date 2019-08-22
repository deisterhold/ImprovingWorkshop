import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneManagerComponent } from './phone-manager.component';

describe('PhoneManagerComponent', () => {
  let component: PhoneManagerComponent;
  let fixture: ComponentFixture<PhoneManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

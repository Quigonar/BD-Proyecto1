/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrebillingComponent } from './prebilling.component';

describe('PrebillingComponent', () => {
  let component: PrebillingComponent;
  let fixture: ComponentFixture<PrebillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrebillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrebillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellerNewFormComponent } from './seller-new-form.component';

describe('SellerNewFormComponent', () => {
  let component: SellerNewFormComponent;
  let fixture: ComponentFixture<SellerNewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerNewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

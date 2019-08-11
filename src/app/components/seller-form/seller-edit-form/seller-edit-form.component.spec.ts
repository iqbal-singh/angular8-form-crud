/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellerEditFormComponent } from './seller-edit-form.component';

describe('SellerEditFormComponent', () => {
  let component: SellerEditFormComponent;
  let fixture: ComponentFixture<SellerEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

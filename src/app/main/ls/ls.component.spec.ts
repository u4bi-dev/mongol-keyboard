/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LsComponent } from './ls.component';

describe('LsComponent', () => {
  let component: LsComponent;
  let fixture: ComponentFixture<LsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

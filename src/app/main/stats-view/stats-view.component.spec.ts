/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatsViewComponent } from './stats-view.component';

describe('StatsViewComponent', () => {
  let component: StatsViewComponent;
  let fixture: ComponentFixture<StatsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

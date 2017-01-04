/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RankViewComponent } from './rank-view.component';

describe('RankViewComponent', () => {
  let component: RankViewComponent;
  let fixture: ComponentFixture<RankViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

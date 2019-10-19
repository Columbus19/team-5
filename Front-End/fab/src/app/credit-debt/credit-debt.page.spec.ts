import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDebtPage } from './credit-debt.page';

describe('CreditDebtPage', () => {
  let component: CreditDebtPage;
  let fixture: ComponentFixture<CreditDebtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditDebtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditDebtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

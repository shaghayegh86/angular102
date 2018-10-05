import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsghistoryComponent } from './msghistory.component';

describe('MsghistoryComponent', () => {
  let component: MsghistoryComponent;
  let fixture: ComponentFixture<MsghistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsghistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

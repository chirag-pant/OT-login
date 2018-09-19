import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdaploginComponent } from './ldaplogin.component';

describe('LdaploginComponent', () => {
  let component: LdaploginComponent;
  let fixture: ComponentFixture<LdaploginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdaploginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdaploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmMembersComponent } from './realm-members.component';

describe('RealmMembersComponent', () => {
  let component: RealmMembersComponent;
  let fixture: ComponentFixture<RealmMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealmMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealmMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

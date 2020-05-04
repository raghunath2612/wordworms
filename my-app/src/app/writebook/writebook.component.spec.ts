import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritebookComponent } from './writebook.component';

describe('WritebookComponent', () => {
  let component: WritebookComponent;
  let fixture: ComponentFixture<WritebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

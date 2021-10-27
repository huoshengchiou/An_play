import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMetComponent } from './add-met.component';

describe('AddMetComponent', () => {
  let component: AddMetComponent;
  let fixture: ComponentFixture<AddMetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetStateComponent } from './met-state.component';

describe('MetStateComponent', () => {
  let component: MetStateComponent;
  let fixture: ComponentFixture<MetStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

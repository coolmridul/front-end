import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearishComponent } from './bearish.component';

describe('BearishComponent', () => {
  let component: BearishComponent;
  let fixture: ComponentFixture<BearishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BearishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGetSetComponent } from './input-get-set.component';

describe('InputGetSetComponent', () => {
  let component: InputGetSetComponent;
  let fixture: ComponentFixture<InputGetSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputGetSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputGetSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

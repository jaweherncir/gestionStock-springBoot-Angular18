import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonActionComponent } from './botton-action.component';

describe('BottonActionComponent', () => {
  let component: BottonActionComponent;
  let fixture: ComponentFixture<BottonActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottonActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

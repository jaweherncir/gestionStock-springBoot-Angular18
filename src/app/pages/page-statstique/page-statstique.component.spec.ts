import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatstiqueComponent } from './page-statstique.component';

describe('PageStatstiqueComponent', () => {
  let component: PageStatstiqueComponent;
  let fixture: ComponentFixture<PageStatstiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageStatstiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStatstiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

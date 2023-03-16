import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMassimaComponent } from './search-massima.component';

describe('SearchMassimaComponent', () => {
  let component: SearchMassimaComponent;
  let fixture: ComponentFixture<SearchMassimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMassimaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMassimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

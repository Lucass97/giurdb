import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMassimaComponent } from './insert-massima.component';

describe('InsertMassimaComponent', () => {
  let component: InsertMassimaComponent;
  let fixture: ComponentFixture<InsertMassimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertMassimaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertMassimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtesyListComponent } from './courtesy-list.component';

describe('courtesyListComponent', () => {
  let component: CourtesyListComponent;
  let fixture: ComponentFixture<CourtesyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtesyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtesyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

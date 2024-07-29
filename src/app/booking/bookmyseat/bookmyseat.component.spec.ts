import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyseatComponent } from './bookmyseat.component';

describe('BookmyseatComponent', () => {
  let component: BookmyseatComponent;
  let fixture: ComponentFixture<BookmyseatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmyseatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmyseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

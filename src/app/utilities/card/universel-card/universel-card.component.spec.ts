import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverselCardComponent } from './universel-card.component';

describe('UniverselCardComponent', () => {
  let component: UniverselCardComponent;
  let fixture: ComponentFixture<UniverselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniverselCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniverselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

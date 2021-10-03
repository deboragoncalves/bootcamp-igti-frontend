import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTravelInformationsComponent } from './show-travel-informations.component';

describe('ShowTravelInformationsComponent', () => {
  let component: ShowTravelInformationsComponent;
  let fixture: ComponentFixture<ShowTravelInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTravelInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTravelInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

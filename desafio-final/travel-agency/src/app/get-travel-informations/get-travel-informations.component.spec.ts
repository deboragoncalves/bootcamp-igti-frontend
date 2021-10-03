import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTravelInformationsComponent } from './get-travel-informations.component';

describe('GetTravelInformationsComponent', () => {
  let component: GetTravelInformationsComponent;
  let fixture: ComponentFixture<GetTravelInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTravelInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTravelInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

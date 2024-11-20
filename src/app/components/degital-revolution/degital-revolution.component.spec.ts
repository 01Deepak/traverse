import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegitalRevolutionComponent } from './degital-revolution.component';

describe('DegitalRevolutionComponent', () => {
  let component: DegitalRevolutionComponent;
  let fixture: ComponentFixture<DegitalRevolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegitalRevolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DegitalRevolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

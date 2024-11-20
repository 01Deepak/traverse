import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpingBusinessComponent } from './helping-business.component';

describe('HelpingBusinessComponent', () => {
  let component: HelpingBusinessComponent;
  let fixture: ComponentFixture<HelpingBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpingBusinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpingBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

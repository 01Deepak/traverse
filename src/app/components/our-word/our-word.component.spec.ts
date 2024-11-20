import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWordComponent } from './our-word.component';

describe('OurWordComponent', () => {
  let component: OurWordComponent;
  let fixture: ComponentFixture<OurWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurWordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

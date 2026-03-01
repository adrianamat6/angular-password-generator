import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGeneratedCard } from './password-generated-card';

describe('PasswordGeneratedCard', () => {
  let component: PasswordGeneratedCard;
  let fixture: ComponentFixture<PasswordGeneratedCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordGeneratedCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordGeneratedCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesNavComponent } from './heroes-nav.component';

describe('HeroesNavComponent', () => {
  let component: HeroesNavComponent;
  let fixture: ComponentFixture<HeroesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilWithoutConnexionComponent } from './accueil-without-connexion.component';

describe('AccueilWithoutConnexionComponent', () => {
  let component: AccueilWithoutConnexionComponent;
  let fixture: ComponentFixture<AccueilWithoutConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilWithoutConnexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilWithoutConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

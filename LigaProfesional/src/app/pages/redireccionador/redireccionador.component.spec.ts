import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedireccionadorComponent } from './redireccionador.component';

describe('RedireccionadorComponent', () => {
  let component: RedireccionadorComponent;
  let fixture: ComponentFixture<RedireccionadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedireccionadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedireccionadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

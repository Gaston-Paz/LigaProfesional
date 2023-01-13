import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaArgentinaComponent } from './liga-argentina.component';

describe('LigaArgentinaComponent', () => {
  let component: LigaArgentinaComponent;
  let fixture: ComponentFixture<LigaArgentinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigaArgentinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaArgentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

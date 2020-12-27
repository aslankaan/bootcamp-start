import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssExampleComponent } from './css-example.component';

describe('CssExampleComponent', () => {
  let component: CssExampleComponent;
  let fixture: ComponentFixture<CssExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

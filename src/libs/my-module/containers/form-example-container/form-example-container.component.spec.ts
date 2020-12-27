import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExampleContainerComponent } from './form-example-container.component';

describe('FormExampleContainerComponent', () => {
  let component: FormExampleContainerComponent;
  let fixture: ComponentFixture<FormExampleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExampleContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExampleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

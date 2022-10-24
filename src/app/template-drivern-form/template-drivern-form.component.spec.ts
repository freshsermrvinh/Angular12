import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivernFormComponent } from './template-drivern-form.component';

describe('TemplateDrivernFormComponent', () => {
  let component: TemplateDrivernFormComponent;
  let fixture: ComponentFixture<TemplateDrivernFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivernFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivernFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

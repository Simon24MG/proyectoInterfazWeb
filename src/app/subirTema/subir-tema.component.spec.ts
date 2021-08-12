import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirTemaComponent } from './subir-tema.component';

describe('SubirTemaComponent', () => {
  let component: SubirTemaComponent;
  let fixture: ComponentFixture<SubirTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirTemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

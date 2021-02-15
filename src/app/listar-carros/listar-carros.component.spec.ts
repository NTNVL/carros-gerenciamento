import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCarrosComponent } from './listar-carros.component';

describe('ListarCarrosComponent', () => {
  let component: ListarCarrosComponent;
  let fixture: ComponentFixture<ListarCarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCarrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

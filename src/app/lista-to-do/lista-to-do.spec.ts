import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaToDo } from './lista-to-do';

describe('ListaToDo', () => {
  let component: ListaToDo;
  let fixture: ComponentFixture<ListaToDo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaToDo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaToDo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

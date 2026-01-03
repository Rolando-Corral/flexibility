import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericItemRowComponent } from './generic-item-row.component';

describe('GenericItemRowComponent', () => {
  let component: GenericItemRowComponent;
  let fixture: ComponentFixture<GenericItemRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericItemRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericItemRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

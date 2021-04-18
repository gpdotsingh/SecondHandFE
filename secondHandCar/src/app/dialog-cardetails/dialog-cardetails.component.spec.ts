import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCardetailsComponent } from './dialog-cardetails.component';

describe('DialogCardetailsComponent', () => {
  let component: DialogCardetailsComponent;
  let fixture: ComponentFixture<DialogCardetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCardetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCardetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScrollPageComponent } from './main-scroll-page.component';

describe('MainScrollPageComponent', () => {
  let component: MainScrollPageComponent;
  let fixture: ComponentFixture<MainScrollPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainScrollPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainScrollPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

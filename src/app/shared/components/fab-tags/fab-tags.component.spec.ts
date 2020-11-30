import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabTagsComponent } from './fab-tags.component';

describe('FabTagsComponent', () => {
  let component: FabTagsComponent;
  let fixture: ComponentFixture<FabTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

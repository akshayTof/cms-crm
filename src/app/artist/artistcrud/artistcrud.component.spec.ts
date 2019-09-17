import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistcrudComponent } from './artistcrud.component';

describe('ArtistcrudComponent', () => {
  let component: ArtistcrudComponent;
  let fixture: ComponentFixture<ArtistcrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistcrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

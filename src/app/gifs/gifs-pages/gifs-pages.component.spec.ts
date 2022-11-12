import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsPagesComponent } from './gifs-pages.component';

describe('GifsPagesComponent', () => {
  let component: GifsPagesComponent;
  let fixture: ComponentFixture<GifsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

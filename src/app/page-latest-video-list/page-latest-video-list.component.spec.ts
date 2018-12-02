import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLatestVideoListComponent } from './page-latest-video-list.component';

describe('PageLatestVideoListComponent', () => {
  let component: PageLatestVideoListComponent;
  let fixture: ComponentFixture<PageLatestVideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLatestVideoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLatestVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

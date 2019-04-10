import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProfileViewerComponent } from './github-profile-viewer.component';

describe('GithubProfileViewerComponent', () => {
  let component: GithubProfileViewerComponent;
  let fixture: ComponentFixture<GithubProfileViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubProfileViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubProfileViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

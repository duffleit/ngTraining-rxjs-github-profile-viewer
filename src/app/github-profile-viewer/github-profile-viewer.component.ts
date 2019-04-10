import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile-viewer',
  template: `
    <input (keyup)="changeUsername($event.target.value)" [value]="userName" />
  `,
  styleUrls: ['./github-profile-viewer.component.css']
})
export class GithubProfileViewerComponent {
  public userName = '';

  constructor() {}

  public changeUsername(value: string): void {
    this.userName = value;
  }
}

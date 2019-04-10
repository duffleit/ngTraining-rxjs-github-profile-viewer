import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-profile-viewer',
  template: `
    <input (keyup)="changeUsername($event.target.value)" [value]="userName" />
    <div>
      {{ githubProfile$ | async | json }}
    </div>
  `,
  styleUrls: ['./github-profile-viewer.component.css']
})
export class GithubProfileViewerComponent {
  public userName = '';
  public githubProfile$;
  constructor(private http: HttpClient) {}

  public changeUsername(value: string): void {
    this.userName = value;
    this.githubProfile$ = this.http.get(
      `https://api.github.com/users/${this.userName}`
    );
  }
}

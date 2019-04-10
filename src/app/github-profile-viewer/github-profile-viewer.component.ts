import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, mergeMap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

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
export class GithubProfileViewerComponent implements OnInit {
  public userName$ = new BehaviorSubject<string>('');
  public githubProfile$: Observable<any>;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.userName$.pipe(debounceTime(1000)).subscribe(userName => {
      this.githubProfile$ = this.http.get(
        `https://api.github.com/users/${userName}`
      );
    });
  }

  get userName(): string {
    return this.userName$.value;
  }

  public changeUsername(value: string): void {
    this.userName$.next(value);
  }
}

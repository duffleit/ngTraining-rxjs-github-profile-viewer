import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, mergeMap, tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-github-profile-viewer',
  template: `
    <input (keyup)="changeUsername($event.target.value)" [value]="userName" />
    <div *ngIf="(githubProfile$ | async); else loading; let userName">
      <h2>{{ userName.login }}</h2>
      <img [src]="userName.avatar_url" />
      <p>Location: {{ userName.location }}</p>
      <p>Bio: {{ userName.bio }}</p>
    </div>
    <ng-template #loading>
      <div *ngIf="errorObject">Error</div>
      <div *ngIf="!errorObject">
        Loading...
      </div>
    </ng-template>
  `,
  styleUrls: ['./github-profile-viewer.component.css']
})
export class GithubProfileViewerComponent implements OnInit {
  public userName$ = new BehaviorSubject<string>('');
  public githubProfile$: Observable<any>;
  public errorObject = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.userName$
      .pipe(
        tap(() => {
          this.errorObject = null;
        }),
        debounceTime(1000)
      )
      .subscribe(userName => {
        this.githubProfile$ = this.http
          .get(`https://api.github.com/users/${userName}`)
          .pipe(
            catchError(error => {
              this.errorObject = error;
              return throwError(error);
            })
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

# RxJS: Github Profile Viewer

This exercise helps you in understanding the usage of Http-Observables and render its response. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Tasks

1. Create a component which allow the user to enter a github-username into a textbox.

2. Fetch the user-profile on every textbox-change and just render it as json: 

```
// github request: 
this.githubProfile$ = this.http.get(
	`https://api.github.com/users/${this.userName}`
);

// rendering in json
{{ githubProfile$ | async | json }}
```

3. Debounce the fetching, so that a profile should only be loaded at most every seconds. _Hint:_ Store the username as `BehaviorSubject`. 

3. Show the name (`.login`), his description (`.bio`), current residence (`.location`) and profile-picture:

```
<img [src]="userName.avatar_url"/>
```

4. __BONUS:__ Add Error-Handling and a loading indicator to the current solution. 
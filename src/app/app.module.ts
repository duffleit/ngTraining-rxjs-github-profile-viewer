import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GithubProfileViewerComponent } from './github-profile-viewer/github-profile-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubProfileViewerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular-6-social-login";

// Components
import { ListPageComponent } from './components/list-page/list-page.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { DeleteSolutionDialogComponent } from './components/delete-solution-dialog/delete-solution-dialog.component';
import { httpInterceptorProviders } from './interceptors/headers-interceptor/index';
import { NewSolutionComponent } from './components/new-solution/new-solution.component';
import { EditSolutionComponent } from './components/edit-solution/edit-solution.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
// import { getAuthServiceConfigs } from "./components/sign-in/sign-in-config";

// barrel
import { NavBarService } from './shared';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("487556380216-vsv5i8od9ubeecdsb4tqun2t5g5i8tl1.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    DetailPageComponent,
    DeleteSolutionDialogComponent,
    NewSolutionComponent,
    EditSolutionComponent,
    NavBarComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule
  ],
  entryComponents: [
    DeleteSolutionDialogComponent
  ],
  providers: [
    httpInterceptorProviders,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    // GoogleLoginProvider,
    NavBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

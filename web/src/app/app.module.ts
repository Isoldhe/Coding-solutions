import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { ListPageComponent } from './components/list-page/list-page.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { DeleteSolutionDialogComponent } from './components/delete-solution-dialog/delete-solution-dialog.component';

// barrels
import { httpInterceptorProviders } from './interceptors/headers-interceptor/index';
import { NewSolutionComponent } from './components/new-solution/new-solution.component';
import { EditSolutionComponent } from './components/edit-solution/edit-solution.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    DetailPageComponent,
    DeleteSolutionDialogComponent,
    NewSolutionComponent,
    EditSolutionComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    DeleteSolutionDialogComponent
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

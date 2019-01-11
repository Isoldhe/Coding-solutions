import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { NewSolutionComponent } from './components/new-solution/new-solution.component';
import { EditSolutionComponent } from './components/edit-solution/edit-solution.component';

import { AuthGuard } from "./guards/auth-guard.service";

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'solutions-list', component: ListPageComponent, canActivate: [AuthGuard] },
  { path: 'solution-detail/:id', component: DetailPageComponent, canActivate: [AuthGuard] },
  { path: 'new-solution', component: NewSolutionComponent, canActivate: [AuthGuard] },
  { path: 'edit-solution/:id', component: EditSolutionComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home (ListPageComponent)
  { path: '**', redirectTo: 'solutions-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

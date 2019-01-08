import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPageComponent } from './components/list-page/list-page.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { NewSolutionComponent } from './components/new-solution/new-solution.component';
import { EditSolutionComponent } from './components/edit-solution/edit-solution.component';

const routes: Routes = [
  { path: 'solutions-list', component: ListPageComponent },
  { path: 'solution-detail/:id', component: DetailPageComponent },
  { path: 'new-solution', component: NewSolutionComponent },
  { path: 'edit-solution/:id', component: EditSolutionComponent },

  // otherwise redirect to home (ListPageComponent)
  { path: '**', redirectTo: 'solutions-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

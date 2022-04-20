import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourtesyDetailComponent } from './courtesy/courtesy-detail/courtesy-detail.component';
import { CourtesyListComponent } from './courtesy/courtesy-list/courtesy-list.component';

const routes: Routes = [
  {path: 'trends', component: CourtesyListComponent },
  {path: 'home', component: CourtesyListComponent },
  {path: 'login', component: CourtesyListComponent },
  {path: 'detail/:id', component: CourtesyDetailComponent },
  {path: '', component: CourtesyListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

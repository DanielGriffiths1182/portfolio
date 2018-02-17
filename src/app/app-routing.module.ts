import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { SkillsComponent }      from './skills/skills.component';
import { SkillDetailComponent }  from './skill-detail/skill-detail.component';
import { RepositoryComponent }  from './repository/repository.component';
import { BiographyComponent }  from './biography/biography.component';


const routes: Routes = [
  { path: '', redirectTo: '/skills', pathMatch: 'full' },
  { path: 'detail/:id', component: SkillDetailComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'repository', component: RepositoryComponent },
  { path: 'biography', component: BiographyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

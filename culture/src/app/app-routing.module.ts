import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'author', loadChildren: () => import('./author/author.module').then(m => m.AuthorModule) },
  { path: 'team', loadChildren: () => import('./team/team.module').then(m => m.TeamModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminConsoleComponent} from './admin-pages/admin-console/admin-console.component';
import {ArticlesComponent} from './admin-pages/articles/articles.component';
import {PagesComponent} from './admin-pages/pages/pages.component';

const routes: Routes = [
  {path: 'admin', component: AdminConsoleComponent},
  {path: 'admin/articles', component: ArticlesComponent},
  {path: 'admin/pages', component: PagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

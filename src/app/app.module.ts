import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewArticleComponent } from './view-article/view-article.component';
import { AdminConsoleComponent } from './admin-pages/admin-console/admin-console.component';
import { ArticlesComponent } from './admin-pages/articles/articles.component';
import { PagesComponent } from './admin-pages/pages/pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ViewArticleComponent,
    AdminConsoleComponent,
    ArticlesComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

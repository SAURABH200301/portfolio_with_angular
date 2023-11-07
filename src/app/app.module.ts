import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { routerPath } from './routerPath';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialMediaComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    RouterModule.forRoot(routerPath)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

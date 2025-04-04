import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TagCanvasModule } from 'ng-tagcanvas';
import { TagCanvasComponent } from './components/tag-canvas/tag-canvas.component';
import { HomeComponent } from './components/home/home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeadingComponent } from './components/heading/heading.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainScrollPageComponent } from './components/main-scroll-page/main-scroll-page.component';
import { MouseComponent } from './components/mouse/mouse.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    FooterComponent,
    PortfolioComponent,
    TagCanvasComponent,
    HomeComponent,
    HomePageComponent,
    HeadingComponent,
    ContactMeComponent,
    AboutMeComponent,
    MainScrollPageComponent,
    MouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    TagCanvasModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

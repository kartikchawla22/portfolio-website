import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { animationState: 'home' }
  },
  {
    path: 'projects',
    component: PortfolioComponent,
    data: { animationState: 'portfolio' }
  },
  {
    path: 'contact',
    component: ContactMeComponent,
    data: { animationState: 'contact' }
  },
  {
    path: 'projects/:project',
    component: ProjectComponent
  },
  {
    path: 'aboutme',
    component: AboutMeComponent,
    data: { animationState: 'aboutme' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ServiceComponent } from '../components/service/service.component';
import { WhyComponent } from '../components/why/why.component';
import { TeamComponent } from '../components/team/team.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'service', component: ServiceComponent
    },
    {
        path: 'why', component: WhyComponent
    },
    {
        path: 'team', component: TeamComponent
    },
];


// bootstrapApplication(AppComponent, {
//     providers: [provideRouter(routes)],
//   }).catch((err) => console.error(err));

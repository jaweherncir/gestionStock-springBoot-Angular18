import { Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatstiqueComponent } from './pages/page-statstique/page-statstique.component';
import { PageArticlesComponent } from './pages/articles/page-articles/page-articles.component';

export const routes: Routes = [
    {
        path:'login',
        component:PageLoginComponent
    },
    {
        path:'inscrire',
        component:PageInscriptionComponent
    },
    {
        path:'',
        component:PageDashboardComponent,
        children:[
            {
                path:'statstique',
                component:PageStatstiqueComponent
            },
            {
                path:'articles',
                component:PageArticlesComponent
            }
        ]
    },
];

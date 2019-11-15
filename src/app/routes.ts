
import { HomeComponent } from './home/home.component';

export const appRoutes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
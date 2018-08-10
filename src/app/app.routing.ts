import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const appRouting: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // }
];

export const AppRouting = RouterModule.forRoot(appRouting);

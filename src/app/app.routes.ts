import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {ShopComponent} from './modules/shop/shop.component';
import {AuthComponent} from './modules/auth/auth.component';
import {NewsComponent} from './modules/news/news.component';
import {LoginComponent} from './modules/auth/login/login.component';
import {RegisterComponent} from './modules/auth/register/register.component';
import {ForgotPasswordComponent} from './modules/auth/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './modules/auth/reset-password/reset-password.component';
import {AppCustomPreloader} from './app-routing.preload';
import {SearchOverviewComponent} from './modules/search/overview/overview.component';
import {SearchComponent} from './modules/search/search.component';
import {ShopOverviewComponent} from './modules/shop/overview/overview.component';
import {NewsOverviewComponent} from './modules/news/overview/overview.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchComponent,
    children: [
      {
        path: 'overview',
        component: SearchOverviewComponent,
        pathMatch:'full',
      },

      // Default redirect to the overview
      {
        path: '**',
        redirectTo: 'overview'
      }
    ]
  },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      {
        path: 'overview',
        component: ShopOverviewComponent,
        pathMatch:'full',
      },
      {
        path: 'daily-shop',
        component: ShopOverviewComponent,
        pathMatch:'full',
      },
      {
        path: 'item-shop',
        component: ShopOverviewComponent,
        pathMatch:'full',
      },

      // Default redirect to the overview
      {
        path: '**',
        redirectTo: 'overview'
      }
    ]
  },
  {
    path: 'news',
    component: NewsComponent,
    children: [
      {
        path: 'overview',
        component: NewsOverviewComponent,
        pathMatch:'full',
      },

      // Default redirect to the overview
      {
        path: '**',
        redirectTo: 'overview'
      }
    ]

  },

  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterComponent,
        pathMatch: 'full'
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        pathMatch: 'full'
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        pathMatch: 'full'
      },
      // Default redirect to the login
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('src/app/modules/authentication/authentication.module').then(m => m.AuthenticationModule),
  //   data: { preload: true }
  // },

  // Privacy Policy - Terms & Conditions - Support
  {
    path: 'privacy-policy',
    component: HomeComponent,
  },
  {
    path: 'terms-conditions',
    component: HomeComponent,
  },
  {
    path: 'support',
    component: HomeComponent,
  },
  // Default redirect to home
  {
    path: '**',
    redirectTo: ''
  }
];

export const appRoutes = RouterModule.forRoot(routes, {
  preloadingStrategy: AppCustomPreloader
});

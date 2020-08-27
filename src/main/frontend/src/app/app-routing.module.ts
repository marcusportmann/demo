import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {
  AdminContainerComponent, CanActivateFunctionGuard, NotFoundComponent, SimpleContainerComponent
} from 'ngx-inception';

import {AdministrationTitleResolver} from './views/administration/administration-title-resolver';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'dashboard',
}, {
  path: '',
  component: AdminContainerComponent,
  children: [{
    path: 'dashboard',
    canActivate: [CanActivateFunctionGuard
    ],
    data: {
      title: 'Dashboard',
      authorities: ['ROLE_Administrator', 'FUNCTION_Application.Dashboard']
    },
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
  }, {
    path: 'administration',
    resolve: {
      title: AdministrationTitleResolver
    },
    loadChildren: () => import('./views/administration/administration.module').then(m => m.AdministrationModule)
  }
  ]
},

  // Login route
  {
    path: 'login',
    component: SimpleContainerComponent,
    loadChildren: () => import('./views/wrappers/login-views-wrapper.module').then(m => m.LoginViewsWrapperModule)
  },

  // Send Error Report route
  {
    path: 'error',
    component: SimpleContainerComponent,
    loadChildren: () => import('./views/wrappers/error-views-wrapper.module').then(m => m.ErrorViewsWrapperModule)
  },

  // Default route for invalid paths
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  // Tracing should only be enabled for DEBUG purposes
  imports: [

    // Angular modules
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [RouterModule],
  providers: [AdministrationTitleResolver]
})
export class AppRoutingModule {
}

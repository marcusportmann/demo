import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {
  CodeCategoriesTitleResolver,
  ConfigurationsTitleResolver,
  MailTitleResolver,
  ReportingTitleResolver,
  SchedulerTitleResolver,
  SecurityTitleResolver
} from 'ngx-inception';

import {AdministrationComponent} from './administration.component';
import {AdministrationTitleResolver} from './administration-title-resolver';
import {SystemTitleResolver} from './system-title-resolver';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: AdministrationComponent,
  resolve: {
    title: AdministrationTitleResolver
  }
}, {
  path: 'security',
  resolve: {
    title: SecurityTitleResolver
  },
  loadChildren: () => import('../wrappers/security-views-wrapper.module').then(m => m.SecurityViewsWrapperModule)
}, {
  path: 'system',
  resolve: {
    title: SystemTitleResolver
  },
  children: [{
    path: 'code-categories',
    resolve: {
      title: CodeCategoriesTitleResolver
    },
    loadChildren: () => import('../wrappers/codes-views-wrapper.module').then(m => m.CodesViewsWrapperModule)
  }, {
    path: 'configuration',
    resolve: {
      title: ConfigurationsTitleResolver
    },
    loadChildren: () => import('../wrappers/configuration-views-wrapper.module').then(
      m => m.ConfigurationViewsWrapperModule)
  }, {
    path: 'mail',
    resolve: {
      title: MailTitleResolver
    },
    loadChildren: () => import('../wrappers/mail-views-wrapper.module').then(m => m.MailViewsWrapperModule)
  }, {
    path: 'scheduler',
    resolve: {
      title: SchedulerTitleResolver
    },
    loadChildren: () => import('../wrappers/scheduler-views-wrapper.module').then(m => m.SchedulerViewsWrapperModule)
  }, {
    path: 'reporting',
    resolve: {
      title: ReportingTitleResolver
    },
    loadChildren: () => import('../wrappers/reporting-views-wrapper.module').then(m => m.ReportingViewsWrapperModule)
  }
  ]
}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [AdministrationComponent],
  providers: [

    // Resolvers
    CodeCategoriesTitleResolver, ConfigurationsTitleResolver, MailTitleResolver, ReportingTitleResolver,
    SchedulerTitleResolver, SecurityTitleResolver, SystemTitleResolver
  ]
})
export class AdministrationModule {
}

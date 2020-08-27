import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  InceptionAppModule, InceptionConfig, InceptionModule, NavigationBadge, NavigationItem, NavigationTitle
} from 'ngx-inception';

const ngxInceptionConfig: InceptionConfig = {
  // Application Information
  applicationId: 'digital.inception.demo',
  applicationVersion: '1.0.0',

  // OAuth Token URL
  oauthTokenUrl: 'http://localhost:8080/oauth/token',

  // Logout redirect URI
  logoutRedirectUri: '/login',

  // Inception API URLs
  codesApiUrlPrefix: 'http://localhost:8080/api/codes',
  configurationApiUrlPrefix: 'http://localhost:8080/api/configuration',
  errorApiUrlPrefix: 'http://localhost:8080/api/error',
  mailApiUrlPrefix: 'http://localhost:8080/api/mail',
  referenceApiUrlPrefix: 'http://localhost:8080/api/reference',
  reportingApiUrlPrefix: 'http://localhost:8080/api/reporting',
  schedulerApiUrlPrefix: 'http://localhost:8080/api/scheduler',
  securityApiUrlPrefix: 'http://localhost:8080/api/security',

  // Flags
  forgottenPasswordEnabled: true
};

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent
  ],
  exports: [InceptionModule],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    InceptionModule.forRoot(ngxInceptionConfig)
  ]
})

export class AppModule extends InceptionAppModule {
  constructor() {
    super();
  }

  /**
   * Initialise the navigation for the application.
   *
   * @returns The navigation for the application.
   */
  protected initNavigation(): NavigationItem[] {

    const navigation: NavigationItem[] = [];

    navigation.push(new NavigationItem('fa fa-tachometer-alt', 'Dashboard', '/dashboard',
      ['ROLE_Administrator', 'FUNCTION_Application.Dashboard'], undefined, undefined, undefined));

    navigation.push(new NavigationItem('fa fa-cogs', 'Administration', '/administration',
      ['ROLE_Administrator', 'FUNCTION_Codes.CodeAdministration', 'FUNCTION_Configuration.ConfigurationAdministration',
        'FUNCTION_Security.GroupAdministration', 'FUNCTION_Security.TenantAdministration',
        'FUNCTION_Security.ResetUserPassword', 'FUNCTION_Security.UserAdministration',
        'FUNCTION_Security.UserDirectoryAdministration', 'FUNCTION_Security.UserGroups',
        'FUNCTION_Scheduler.SchedulerAdministration', 'FUNCTION_Scheduler.JobAdministration',
        'FUNCTION_Mail.MailAdministration', 'FUNCTION_Mail.MailTemplateAdministration'
      ], [new NavigationItem('fa fa-shield-alt', 'Security', '/administration/security',
        ['ROLE_Administrator', 'FUNCTION_Security.GroupAdministration', 'FUNCTION_Security.TenantAdministration',
          'FUNCTION_Security.ResetUserPassword', 'FUNCTION_Security.UserAdministration',
          'FUNCTION_Security.UserDirectoryAdministration', 'FUNCTION_Security.UserGroups'
        ], [new NavigationItem('fas fa-user', 'Users', '/administration/security/users',
          ['ROLE_Administrator', 'FUNCTION_Security.ResetUserPassword', 'FUNCTION_Security.UserAdministration',
            'FUNCTION_Security.UserGroups'
          ]), new NavigationItem('fas fa-users', 'Groups', '/administration/security/groups',
          ['ROLE_Administrator', 'FUNCTION_Security.GroupAdministration']),
          new NavigationItem('far fa-building', 'Tenants', '/administration/security/tenants',
            ['ROLE_Administrator', 'FUNCTION_Security.TenantAdministration']),
          new NavigationItem('far fa-address-book', 'User Directories', '/administration/security/user-directories',
            ['ROLE_Administrator', 'FUNCTION_Security.UserDirectoryAdministration'])
        ]), new NavigationItem('fa fa-cog', 'System', '/administration/system',
        ['ROLE_Administrator', 'FUNCTION_Codes.CodeAdministration',
          'FUNCTION_Configuration.ConfigurationAdministration', 'FUNCTION_Mail.MailAdministration',
          'FUNCTION_Mail.MailTemplateAdministration', 'FUNCTION_Scheduler.SchedulerAdministration',
          'FUNCTION_Scheduler.JobAdministration'
        ], [new NavigationItem('fa fa-list', 'Codes', '/administration/system/code-categories',
          ['ROLE_Administrator', 'FUNCTION_Codes.CodeAdministration']),
          new NavigationItem('fa fa-list', 'Configuration', '/administration/system/configuration',
            ['ROLE_Administrator', 'FUNCTION_Configuration.ConfigurationAdministration']),
          new NavigationItem('fas fa-envelope', 'Mail', '/administration/system/mail',
            ['ROLE_Administrator', 'FUNCTION_Mail.MailAdministration', 'FUNCTION_Mail.MailTemplateAdministration'
            ], [new NavigationItem('fas fa-envelope-open-text', 'Mail Templates',
              '/administration/system/mail/mail-templates',
              ['ROLE_Administrator', 'FUNCTION_Mail.MailAdministration', 'FUNCTION_Mail.MailTemplateAdministration'
              ])
            ]), new NavigationItem('fas fa-clock', 'Scheduler', '/administration/system/scheduler',
            ['ROLE_Administrator', 'FUNCTION_Scheduler.SchedulerAdministration', 'FUNCTION_Scheduler.JobAdministration'
            ], [new NavigationItem('fas fa-cogs', 'Jobs', '/administration/system/scheduler/jobs',
              ['ROLE_Administrator', 'FUNCTION_Scheduler.SchedulerAdministration',
                'FUNCTION_Scheduler.JobAdministration'
              ])
            ]), new NavigationItem('fas fa-file-invoice', 'Reporting', '/administration/system/reporting',
            ['ROLE_Administrator', 'FUNCTION_Reporting.ReportingAdministration',
              'FUNCTION_Reporting.ReportDefinitionAdministration'
            ], [new NavigationItem('far fa-copy', 'Report Definitions',
              '/administration/system/reporting/report-definitions',
              ['ROLE_Administrator', 'FUNCTION_Reporting.ReportingAdministration',
                'FUNCTION_Reporting.ReportDefinitionAdministration'
              ])
            ])
        ])
      ]));

    return navigation;
  }
}

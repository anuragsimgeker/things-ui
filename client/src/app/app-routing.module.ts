import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThingsComponent } from './things/things.component';
import { HelpComponent } from './help/help.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: DashboardComponent, children: [
    { path: 'dashboard', component: ThingsComponent },
    { path: 'help', component: HelpComponent }
  ]},
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

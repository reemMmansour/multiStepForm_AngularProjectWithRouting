import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { YourPersonalInfoComponent } from './your-personal-info/your-personal-info.component';
import { YourPlanComponent } from './your-plan/your-plan.component';
import { PickAddOnsComponent } from './pick-add-ons/pick-add-ons.component';
import { SummaryFinishingUpComponent } from './summary-finishing-up/summary-finishing-up.component';
import { ThanksComponent } from './thanks/thanks.component';
// import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [];

const appRoute: Routes = [
  // { path: '', redirectTo: 'YourPersonalInfo', pathMatch: 'full' },
  { path: '', component: YourPersonalInfoComponent },
  { path: 'YourPersonalInfo', component: YourPersonalInfoComponent },
  { path: 'YourPlan', component: YourPlanComponent },
  { path: 'PickAddOns', component: PickAddOnsComponent },
  { path: 'SummaryFinishingUp', component: SummaryFinishingUpComponent },
  { path: 'ThankYou', component: ThanksComponent },
  { path: '**', component: ErrorNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(appRoute)

  ],



  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickAddOnsComponent } from './pick-add-ons/pick-add-ons.component';
import { YourPersonalInfoComponent } from './your-personal-info/your-personal-info.component';
import { YourPlanComponent } from './your-plan/your-plan.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { SummaryFinishingUpComponent } from './summary-finishing-up/summary-finishing-up.component';
import { ThanksComponent } from './thanks/thanks.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

// const appRoute: Routes = [
//   { path: '', redirectTo: 'YourPersonalInfo', pathMatch: 'full' },
//   // { path: '', component: YourPersonalInfoComponent },
//   { path: 'YourPersonalInfo', component: YourPersonalInfoComponent },
//   { path: 'YourPlan', component: YourPlanComponent },
//   { path: 'PickAddOns', component: PickAddOnsComponent },
//   { path: 'SummaryFinishingUp', component: SummaryFinishingUpComponent },
//   { path: 'ThankYou', component: ThanksComponent},
//   { path: '**', component: ErrorNotFoundComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    PickAddOnsComponent,
    YourPersonalInfoComponent,
    YourPlanComponent,
    ErrorNotFoundComponent,
    SummaryFinishingUpComponent,
    ThanksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'secondProjectWithRouting';
  reactiveForm: FormGroup;
  i: number = 0;
  routerLinkStyle_1 = '';
  routerLinkStyle_2 = '';
  routerLinkStyle_3 = '';
  routerLinkStyle_4 = '';

  constructor(private route: Router) {}
  ngOnInit(): void {
    this.route.navigateByUrl('YourPersonalInfo');

    this.routerLinkStyle_1 = 'active';

    // throw new Error('Method not implemented.');
  }
  goToNextStep() {
    if (this.i < 6) {
      ++this.i;
      this.routerLinkStyle_1 = 'step';
      this.routerLinkStyle_2 = 'step';
      this.routerLinkStyle_3 = 'step';
      this.routerLinkStyle_4 = 'step';

      // if (this.i == 1) {
      //   this.route.navigateByUrl('YourPersonalInfo');
      //   this.routerLinkStyle_1 = 'active';
      //   console.log(this.i);
      // }
      if (this.i == 1) {
        this.route.navigateByUrl('YourPlan');
        this.routerLinkStyle_2 = 'active';

        console.log(this.i);
      } else if (this.i == 2) {
        this.route.navigateByUrl('PickAddOns');
        this.routerLinkStyle_3 = 'active';
        console.log(this.i);
      } else if (this.i == 3) {
        this.route.navigateByUrl('SummaryFinishingUp');
        this.routerLinkStyle_4 = 'active';

        console.log(this.i);
      } else if (this.i == 4) {
        this.route.navigateByUrl('ThankYou');
        this.routerLinkStyle_4 = 'active';

        console.log(this.i);
      }
      // else this.routerLinkStyle_4 = 'active';
    }
  }

  goBackStep() {
    if (this.i >= 0) {
      --this.i;
      this.routerLinkStyle_1 = 'step';
      this.routerLinkStyle_2 = 'step';
      this.routerLinkStyle_3 = 'step';
      this.routerLinkStyle_4 = 'step';
      if (this.i == 0) {
        this.route.navigateByUrl('YourPersonalInfo');
        this.routerLinkStyle_1 = 'active';

        console.log(this.i);
      } else if (this.i == 1) {
        this.route.navigateByUrl('YourPlan');
        this.routerLinkStyle_2 = 'active';

        console.log(this.i);
      } else if (this.i == 2) {
        this.route.navigateByUrl('PickAddOns');
        this.routerLinkStyle_3 = 'active';

        console.log(this.i);
      } else if (this.i == 3) {
        this.route.navigateByUrl('SummaryFinishingUp');
        this.routerLinkStyle_4 = 'active';

        console.log(this.i);
      }
      // else this.routerLinkStyle_1 = 'active';
    }
  }
}

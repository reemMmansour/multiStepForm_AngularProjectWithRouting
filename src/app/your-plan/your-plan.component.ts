import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-plan',
  templateUrl: './your-plan.component.html',
  styleUrls: ['./your-plan.component.css'],
})
export class YourPlanComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  monthArray = [
    {
      id: 1,
      image: 'assets/images/icon-arcade.svg',
      month: 9,
      isActive: false,
    },
    {
      id: 2,
      image: 'assets/images/icon-advanced.svg',
      month: 12,
      isActive: false,
    },
    { id: 3, image: 'assets/images/icon-pro.svg', month: 15, isActive: false },
  ];
  active = '';
  value: string = '';
  hiddenElement?: boolean;
  valueYearOrMonth?: string;
  onChangeFunction(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    // console.log(this.value);
    if (this.value == '1') {
      this.hiddenElement = true;
      console.log(this.hiddenElement);

    } else {
      this.hiddenElement = false;
      console.log(this.hiddenElement);
    }
    this.valueYearOrMonth = this.value;

    console.log(this.valueYearOrMonth);
    // return value;
  }

  // isActive: boolean = false;
//border around clicked div
  optionOfPilling(item: any ) {
    this.monthArray.forEach((i) => { i.isActive = false } );
    item.isActive = true;
    // this.isActive = true;
  }














  optionOfPilling1(ele: any) {
    ele.isActive = !ele.isActive;
    // console.log(event.target);
    // this.isActive = true;
    // this.active = 'active';
  }
}

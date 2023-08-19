import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-your-personal-info',
  templateUrl: './your-personal-info.component.html',
  styleUrls: ['./your-personal-info.component.css']
})

export class YourPersonalInfoComponent implements OnInit {

  title = "";
  reactiveForm: FormGroup;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.reactiveForm = new FormGroup({
      fallname : new FormControl(null),
      email : new FormControl(null ,[Validators.required,Validators.email]),
      phonenumber : new FormControl(null),

    })
  }



}

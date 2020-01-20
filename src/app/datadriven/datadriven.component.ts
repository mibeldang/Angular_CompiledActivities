import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-datadriven',
  templateUrl: './datadriven.component.html',
  styleUrls: ['./datadriven.component.css']
})
export class DatadrivenComponent implements OnInit {
  public show = false
  reactiveForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      code: ['', Validators.required],
    })
  })
  fullName: string
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    alert("Submitted")
    this.show = true

  }

}

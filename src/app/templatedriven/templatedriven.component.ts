import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {
  data=[];
  fullname:string;
  email:string;
  genderInput:string;
  namedata:string;
  emailData:string;
  genderData:string;
  public input =true;
  public display=false;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    alert("Submitted")
    this.namedata=this.fullname
    this.emailData=this.email
    this.genderData=this.genderInput
    this.input=false
    this.display=true
  }
  edit(){
    this.input=true;
    this.display=false;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actfive',
  templateUrl: './actfive.component.html',
  styleUrls: ['./actfive.component.css']
})
export class ActfiveComponent implements OnInit {

  public nameInput: string;
  public enrollInput: boolean;
  public genderInput: string;
  public name: string;
  public enroll: string;
  public gender: string;

  constructor() { }

  ngOnInit() {

  }
  submit(){
    this.name=this.nameInput
    this.gender=this.genderInput
    if (this.enrollInput){
      this.enroll="Yes"
    }else{
      this.enroll="No"
    }
    
  }


}

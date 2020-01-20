import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childfive',
  templateUrl: './childfive.component.html',
  styleUrls: ['./childfive.component.css']
})
export class ChildfiveComponent implements OnInit {

  @Input() nameData:string;
  @Input() enrollData:string;
  @Input() genderData:string;
  @Output() datas = new EventEmitter();
  @Output() declineData=new EventEmitter();
  public cdata:string;
  apStudent = [];
  disStudent=[];
  
  

  constructor() { }

  ngOnInit() {
  }

  approve(){
    this.datas.emit("Application is approved")
    this.apStudent.push(`Name:${this.nameData}  Status:${this.enrollData} Gender:${this.genderData}`)
  }

  decline(){
    this.datas.emit("Application is declined")
    this.disStudent.push(`Name:${this.nameData}  Status:${this.enrollData}  Gender:${this.genderData}`)
    this.declineData.emit(this.disStudent)
  }

  // people:any[]=[
  //   {name:"Mibel Paculanang"},
  //   {name:"Shadklyn Bureros"},
  //   {name:"Miles Ocampo"}
  // ]

  
}

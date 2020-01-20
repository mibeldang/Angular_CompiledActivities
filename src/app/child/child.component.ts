import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentData:string;
  @Output() childData = new EventEmitter();
  public cdata:string
  
  

  constructor() { }

  ngOnInit() {
  }

  reply(){
    this.childData.emit(this.cdata)
  }

  

}

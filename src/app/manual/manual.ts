import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  template: '<h1>Practice creating component manually</h1><p>Aja Fighting!!!</p>',
  styles:['h1{color:teal ;font-size:40px} p{color:black ;font-size:25px} ']
})
export class ManualComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

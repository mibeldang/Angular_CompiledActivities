import { Component, OnInit } from '@angular/core';
import {SampleServiceService} from '../sample-service.service';
import {model} from '../model'

@Component({
  selector: 'app-http-and-services',
  templateUrl: './http-and-services.component.html',
  styleUrls: ['./http-and-services.component.css']
})

export class HttpAndServicesComponent implements OnInit {
  model:Array<model>
  constructor(private http:SampleServiceService) { }

  ngOnInit() {
    this.http.displayData().subscribe((data:any[])=>{
      this.model=data
    })
  }
}

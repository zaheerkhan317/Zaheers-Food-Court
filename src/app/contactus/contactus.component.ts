import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  sendData(data:NgForm)
  {
    console.log("data from form is",data.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

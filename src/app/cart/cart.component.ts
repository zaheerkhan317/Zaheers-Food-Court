import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  counter:number=1;
  decvalue()
  {
    this.counter--;
  }

  incvalue()
  {
    this.counter++;
  }

  cal:number=1;
  decvalue1()
  {
    this.cal--;
  }

  incvalue1()
  {
    this.cal++;
  }

  calc:number=1;
  decvalue2()
  {
    this.calc--;
  }

  incvalue2()
  {
    this.calc++;
  }


  constructor() { }

  ngOnInit(): void {
  }
  
}

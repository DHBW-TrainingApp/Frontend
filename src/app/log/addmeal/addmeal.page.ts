import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmeal',
  templateUrl: './addmeal.page.html',
  styleUrls: ['./addmeal.page.scss'],
})
export class AddmealPage implements OnInit {

  myBool = true;


  constructor() { }


  ngOnInit() {
  }

  isChanged(){
    console.log(this.myBool);
  }

}

import { Component, OnInit } from '@angular/core';
import { jsonEval } from '@firebase/util';

@Component({
  selector: 'app-addmeal',
  templateUrl: './addmeal.page.html',
  styleUrls: ['./addmeal.page.scss'],
})
export class AddmealPage implements OnInit {
  constructor() { }

  energy: string = "";
  fat: string = "";
  sat_fat: string = "";
  carbo: string = "";
  sugar: string = "";
  protein: string = "";
  salt: string = "";

  //value:string;

  test = [
    {
      energy: this.energy,
      fat: this.fat,
      sat_fat: this.sat_fat,
    }
  ];

  getEnergy(val: any){ this.energy = val; }
  getFat(val: any){ this.fat = val; }
  getSat_fat(val: any){ this.sat_fat = val; }
  getCarbo(val: any){ this.carbo = val; }
  getSugar(val: any){ this.sugar = val; }
  getProtein(val: any){ this.protein = val; }
  getSalt(val: any){ this.salt = val; }

  saveData(){
    console.log("creating json..");
    const object = {energy:this.energy, fat:this.fat, sat_fat:this.sat_fat, carbo:this.carbo, sugar:this.sugar, protein:this.protein};
    console.log("xxxx  "+JSON.stringify(object));

  }


  printMe(){
    console.log(this.energy+" "+this.fat);
  }
  //alphas = [this.energy, this.fat, this.sat_fat, this.carbo, this.sugar, this.protein, this.salt];
  //jj:any = JSON.stringify(this.alphas);


 // doLog(){
 //   console.log(this.jj);
 // }

  ngOnInit() {
  }


}

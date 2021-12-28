import { Component, Inject, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-challenge-create',
  templateUrl: './challenge-create.page.html',
  styleUrls: ['./challenge-create.page.scss'],
})
export class ChallengeCreatePage implements OnInit {

  public Boutdoor: boolean = true;
  public Bhome: boolean = true;
  public Bbody: boolean = true;
  public Bgym: boolean = true;




  @Injectable()
  public selected_option:string;

  public form = [
    { val: 'Outdoor', isChecked: false },
    { val: 'Gym', isChecked: false },
    { val: 'Body related', isChecked: false },
    { val: 'Home', isChecked: false }
  ];

  public home = [
    {a: 'stair steps' },
    {a: 'High knees' },
    {a: 'Big jump' },
    {a: 'Jumping jacks' },
    {a: 'Burpees' },
    {a: 'Mountain climbers' },
    {a: 'Push-ups' },
    //{8: '' },
  ];
  public outdoor = [
    {b: 'stair steps' },
    {b: 'Jogging' },
    {b: 'Dips' },
    {b: 'Sprints' },
    {b: 'Lunge' },
    {b: 'Plank' },
    //{2: 'stair steps' },
    //{2: 'stair steps' },
  ];
  public gym = [
    {c: 'Stairmaster' },
    {c: 'Treadmill' },
    {c: 'Benchpress' },
    {c: 'Barbell curls' },
    {c: 'Sit-ups' },
    {c: 'Chin-ups' },
    //{3: 'stair steps' },
    //{3: 'stair steps' },
  ];
  public body = [
    {d: 'Min calories' },
    {d: 'Max calories' },
    {d: 'Min Carbohydratres' },
    {d: 'Max Carbohydratres' },
    {d: 'Gaining muscles' },
    {d: 'Losing fat' },
    {d: 'Gaining weight' },
    {d: 'Losing weight' },
  ];


  compare():string{
    console.log("Ich wurde ausgeführt");
    console.log("Param: ");
    console.log("Sel_Opt: "+ this.selected_option);
    switch(this.selected_option) {
      case 'Outdoor': {
        this.form[1].isChecked = false;
        this.form[2].isChecked = false;
        this.form[3].isChecked = false;

        this.form[0].isChecked = true;
        this.Boutdoor = false;
        break;
      }
      case 'Gym': {
        this.form[0].isChecked = false;
        this.form[2].isChecked = false;
        this.form[3].isChecked = false;

        this.form[1].isChecked = true;
        this.Bgym = false;
        break;
      }
      case 'Body related': {
        this.form[0].isChecked = false;
        this.form[1].isChecked = false;
        this.form[3].isChecked = false;

        this.form[2].isChecked = true;
        this.Bbody = false;
        break;
      }
      case 'Home': {
        this.form[0].isChecked = false;
        this.form[1].isChecked = false;
        this.form[2].isChecked = false;

        this.form[3].isChecked = true;
        this.Bhome = false;
        break;
      }
    }
    console.log(this.Bbody);
    console.log(this.Bgym);
    console.log(this.Bhome);
    console.log(this.Boutdoor);
    return 'ok';
  }
  ngOnInit() {
  }
  submit(){

  }
  constructor( ) {


  }

}

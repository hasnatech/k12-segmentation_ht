import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-school-dist',
  templateUrl: './school-dist.component.html',
  styleUrls: ['./school-dist.component.scss']
})
export class SchoolDistComponent implements OnInit {

  @Input() data;
  @Output() dataChange:EventEmitter<any> = new EventEmitter<any>();
  
  selectedQues = -1;
  selectedSpecific = -1;
  freedom = 1;

  /*
    selectedQues = 0;
    selectedSpecific = 0;
    freedom = 1;*/

  ansArr = [];
  showAnswer = false;
  constructor() { }
  selected = [];

  freedomText;
  freedomSubText;


  ngOnInit(): void {
    this.ansArr[0] = []
    this.ansArr[0][0] = []
    this.ansArr[0][1] = []

    this.ansArr[1] = []
    this.ansArr[1][0] = []
    this.ansArr[1][1] = []

    this.ansArr[2] = []
    this.ansArr[2][0] = []
    this.ansArr[2][1] = []

    this.ansArr[3] = []
    this.ansArr[3][0] = []
    this.ansArr[3][1] = []


    this.ansArr[0][0][0] = {

      number: 3,
      title: "Mega Value",
      subtext: `
      Houston<br>
      LA<br>
      New York City
      `
    };

    this.ansArr[0][0][1] = {
      color: 'grey',
      number: '',
      title: "",
      subtext: ""
    };

    this.ansArr[0][1][0] = {
      number: 1,
      title: "Super Simple",
      subtext: `HPSI<br>
      Chartwell
      (Compass)
      `
    };

    this.ansArr[0][1][1] = {
      color: 'grey',
      number: '',
      title: "Opportunistic",
      subtext: ``
    };


    this.ansArr[1][0][0] = {
      number: 4,
      title: "Mid Value",
      subtext: `Anoka/
      Hennepin      
      `
    };

    this.ansArr[1][0][1] = {
      color: 'grey',
      number: '',
      title: "",
      subtext: ``

    };

    this.ansArr[1][1][0] = {
      number: 2,
      title: "Mid Value",
      subtext: `Anoka/
      Hennepin      
      `
    };

    this.ansArr[1][1][1] = {
      number: 4,
      title: "Mid Value",
      subtext: `Minneapolis`
    };


    this.ansArr[2][0][0] = {

      number: '',
      title: "Opportunistic",
      subtext: ``
    };

    this.ansArr[2][0][1] = {
      color: 'grey',
      number: '',
      title: "",
      subtext: ``
    };

    this.ansArr[2][1][0] = {
      color: '',
      number: '',
      title: "Opportunistic",
      subtext: ``

    };

    this.ansArr[2][1][1] = {

      number: '',
      title: "",
      subtext: `Wayzata<br>
      Fresno
      `
    };

    this.ansArr[3][0][0] = {
      color: 'grey',
      number: '',
      title: "",
      subtext: ``
    };

    this.ansArr[3][0][1] = {
      color: 'grey',
      number: '',
      title: "",
      subtext: ``
    };

    this.ansArr[3][1][0] = {
      color: 'grey',
      number: '',
      title: "",
      subtext: ``
    };

    this.ansArr[3][1][1] = {
      color: 'grey',
      number: '',
      title: "",
      subtext: ``
    };

    this.freedomClick();
  }
  choice(c) {
    this.selectedQues = c;

  }
  specific(i) {
    this.selectedSpecific = i;
  }
  freedomClick() {
    this.freedom = this.freedom == 0 ? 1 : 0;
    console.log(this.freedom)
    if (this.freedom == 1) {
      this.freedomText = 'High Resources';
      this.freedomSubText = '(chef, nutritionists, menu planners, etc.)';
    } else {
      this.freedomText = 'Low Resources';
      this.freedomSubText = '';
    }
  }
  submit(){
    this.showAnswer = true; 
    this.data = true;
    this.dataChange.emit(this.data);
  }
}

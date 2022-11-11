import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enhancement',
  templateUrl: './enhancement.component.html',
  styleUrls: ['./enhancement.component.scss']
})
export class EnhancementComponent implements OnInit {
  step = 1;
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


    this.ansArr[0][0][0] = {
      number: 3,
      title: "Large but Limited",
      subtext: `Sysco<br>
      USF<br>
      GFS<br>
      Food Buy<br>
      `
    };

    this.ansArr[0][0][1] = {
      number: 3,
      title: "Large but Limited",
      subtext: ``
    };

    this.ansArr[0][1][0] = {
      number: 1,
      title: "Influential Leaders",
      subtext: `Texas State`
    };

    this.ansArr[0][1][1] = {
      number: 3,
      title: "Large but Limited",
      subtext: `New York State`
    };


    this.ansArr[1][0][0] = {
      color: 'grey',
      number: '',
      title: "",
      subtext: ``
    };

    this.ansArr[1][0][1] = {

      number: 2,
      title: "Multi-Segment Partners",
      subtext: `Kohl<br>
      Reinhart
      `
    };

    this.ansArr[1][1][0] = {
      number: 1,
      title: "",
      subtext: `Martin Bros<br>
      Gold Star<br>
      Labatt<br>
      Eastern
      `
    };

    this.ansArr[1][1][1] = {
      number: 3,
      title: "Large but Limited",
      subtext: `New York State`
    };


    this.ansArr[2][0][0] = {
      color: 'grey',
      number: '',
      title: "Opportunistic",
      subtext: `Shamrock`
    };

    this.ansArr[2][0][1] = {
      color: 'grey',
      number: '',
      title: "Opportunistic",
      subtext: ``
    };

    this.ansArr[2][1][0] = {
      color: 'grey',
      number: '',
      title: "Opportunistic",
      subtext: ``

    };

    this.ansArr[2][1][1] = {
      color: 'grey',
      number: '',
      title: "Opportunistic",
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
      this.freedomText = '';
      this.freedomSubText = '(No Specific Spec Requirements, Open to Order)';
    } else {
      this.freedomText = 'No';
      this.freedomSubText = '(Cat Man, Contracts, Specific Regulations)';
    }
  }


  
}

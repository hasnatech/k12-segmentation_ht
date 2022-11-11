import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-segmentaion-support',
  templateUrl: './segmentaion-support.component.html',
  styleUrls: ['./segmentaion-support.component.scss']
})
export class SegmentaionSupportComponent implements OnInit {

  @Input() data;
  @Output() dataChange:EventEmitter<any> = new EventEmitter<any>();
  tab = [
    [
      "KI",
      `
      <ul>
      <li>Strategic Sales Plan</li>
      <li>Monthly Sales Calls</li>
      <li>Annual Sample Kit</li>
      <li>Food Show Attendance</li>
      </ul>
      `,
      `
      <ul>
        <li>Quarterly Sales Calls</li>
        <li>Annual Sample Kit</li>
        <li>Food Show Attendance  </li>      
      </ul>
      `,
      `
      <ul>
        <li>Sample Kit</li>
      </ul>
      `,
      `
      <ul>
        <li>Reactive Sales Calls</li>
      </ul>
      `,
      `
      <ul>
        <li>Reactive Sales Calls</li>
      </ul>
      `
    ],
    [
      "Sales",
      `
      <ul>
        <li>Strategic Sales Plan</li>
        <li>Quarterly Sales Call</li>
        <li>Food Show Attendance</li>        
      </ul>`,
      `
      <ul>
        <li>Annual Sales Call</li>
        <li>RSM Quarterly Review with Broker</li>
        <li>Food Show Attendance</li>
      </ul>`
      , "", "", ""
    ],
    [
      "Marketing",
      `
      <ul>
        <li>Innovation Session</li>        
        <li>Differential Culinary Support</li>        
        <li>Custom Marketing Support & Market Trend Analysis</li>        
        <li>Food Show Partnership/Development</li>        
      </ul>`,
      `
      <ul>
        <li>New Product Promotions (samples, giveaways, etc.)</li>
        <li>Food Show Partnership/Development</li>
      </ul>`
      ,
      `
      <ul>
        <li>All available marketing materials</li>
      </ul>`,
      `
      <ul>
        <li>All available marketing materials</li>
      </ul>`,
      `
      <ul>
        <li>All available marketing materials</li>
      </ul>`
    ]
  ];
  selectedTab = 0;

  selectedQues = -1;
  selectedSpecific = -1;
  freedom = 1;


  /*selectedQues = 0;
  selectedSpecific = 0;
  freedom = 1;*/

  ansArr = [];
  showAnswer = false;
  constructor() { }
  selected = [];

  freedomText;
  freedomSubText;
  options = [
    {
      text1: "Influential Leaders",
      text2: "Super Simple"
    },
    {
      text1: "Multi-Segment Partners",
      text2: "Mid Simple"
    },
    {
      text1: "Large but Limited",
      text2: "Mega Value"
    },
    {
      text1: "",
      text2: "Mid Value"
    },
    {
      text1: "Opportunistic",
      text2: ""
    }
  ]

  ngOnInit(): void {
    this.ansArr[0] = []
    this.ansArr[0][0] = []

    this.ansArr[1] = []
    this.ansArr[1][0] = []

    this.ansArr[2] = []
    this.ansArr[2][0] = []

    this.ansArr[0] = [
      `<ul>
      <li>Strategic Sales Plan</li>
      <li>Monthly Sales Calls</li>
      <li>Annual Sample Kit</li>
      <li>Food Show Attendance</li>
      </ul>`,

      `<ul>
      <li>Quarterly Sales Calls</li>
      <li>Annual Sample Kit</li>
      <li>Food Show Attendance</li>
      </ul>
      `,

      `<ul><li>Sample Kit
      </li></ul>`,
      `
      <ul>
        <li>Reactive Sales Calls</li>
      </ul>`,
      `
      <ul>
        <li>Reactive Sales Calls</li>
      </ul>`
    ]

    this.ansArr[1] = [
      `<ul>
      <li>Strategic Sales Plan</li>
      <li>Quarterly Sales Call</li>
      <li>Food Show Attendance</li>
      </ul>`,

      `<ul>
      <li>Annual Sales Call</li>
      <li>RSM Quarterly Review with Broker</li>
      <li>Food Show Attendance</li>
      </ul>
      `,

      ``,
      `
      `,
      `
      `
    ]

    this.ansArr[2] = [
      `<ul>
      <li>Innovation Session</li>
      <li>Differential Culinary Support</li>
      <li>Custom Marketing Support & Market Trend Analysis</li>
      <li>Food Show Partnership/Development</li>
      </ul>`,

      `<ul>
      <li>New Product Promotions (samples, giveaways, etc.)</li>
      <li>Food Show Partnership/Development</li>
      </ul>
      `,

      `
      <ul>
      <li> All available marketing materials</li>
      </ul>
      `,
      `
      <ul>
      <li> All available marketing materials</li>
      </ul>
      `,
      `
      <ul>
      <li> All available marketing materials</li>
      </ul>
      `
    ]



    this.freedomClick();
  }
  choice(c) {
    this.selectedQues = c;

  }
  specific(i) {
    this.selectedSpecific = i;
    this.data = true;
    console.log(this.data, this.dataChange);
    this.dataChange.emit(this.data);  
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
}
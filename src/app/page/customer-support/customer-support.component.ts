import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss']
})
export class CustomerSupportComponent implements OnInit {
  showAnswer = false;
  hide = true;
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
  
  constructor() { }

  ngOnInit(): void {
  }

}

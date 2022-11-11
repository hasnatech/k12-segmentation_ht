import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.scss']
})
export class ImportantComponent implements OnInit {

  color1 = '#00729a';
  color2 = '#bacddd';
  public barChartOptions = {
    maintainAspectRatio: false,
    scaleShowVerticalLines: true,
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false
    },

    scales: {
      xAxes: [{
        stacked: true,
      }],
      yAxes: [{
        stacked: true
      }]
    }
  };
  public barChartLabels = ['South Atlantic', 'West South Central', 'Pacific', 'East North Central', 'Unknown', 'West North Central', 'Mountain', 'Middle Atlantic', 'East South Central', 'New England'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {
      data: [339, 264, 25, 50, 0, 168, 98, 31, 186, 0],
      label: 'Shady Brook Farms - Sum of Volume',
      backgroundColor: this.color1,
      borderWidth: 0,
      hoverBackgroundColor: undefined
    },
    {
      data: [2718, 2656, 2261, 1714, 1278, 1260, 1121, 727, 491, 206],
      label: "Sunny Fresh - Sum of Volume", backgroundColor: this.color2,
      hoverBackgroundColor: undefined
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

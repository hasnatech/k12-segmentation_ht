import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  color1 = '#bacddd';
  color2 = '#00729a';
  public barChartOptions = {
    scaleShowVerticalLines: true,

    tooltips: {
      mode: 'index',
      intersect: false
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        //stacked: true,
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public barChartLabels = ["Direct", "Labatt Food Service", "US Foods", "Gordon Food Service", "Sysco", "Compass", "Gold Star Food Service", "Kohl Wholesale", "Martin Brothers Distributing Co.", "Reinhart Foodservice", "Shamrock Foods", "SCS Refrigerated Services", "Eastern Food Services", "United States Cold Storage Inc.", "Keck Industries", "Indianhead Foodservice Distributor", "Institutional Wholesale Co", "Americold", "Ben E Keith"];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartData = [
    {
      data: [605378, 203794, 141209, 122519, 0, 0, 0, 50486, 0, 8020, 0, 0, 0, 0, 0, 0, 3133, 0, 24666],
      label: 'Shady Brook Farms - Sum of Volume',
      backgroundColor: this.color1,
      borderWidth: 0,
      hoverBackgroundColor: undefined
    },
    {
      data: [1928466, 1670636, 1621564, 1478702, 1400070, 1278063, 1044028, 407849, 237011, 212946, 212402, 204706, 187605, 172595, 169988, 162138, 158672, 110734, 78548],
      label: "Sunny Fresh - Sum of Volume", backgroundColor: this.color2,
      hoverBackgroundColor: undefined
    }
  ];

  SumofShady;
  SumofSunny;
  constructor() { }

  ngOnInit(): void {
    this.SumofShady = this.barChartData[0].data.reduce((a, b) => a + b, 0)
    this.SumofSunny = this.barChartData[1].data.reduce((a, b) => a + b, 0)
  }

}

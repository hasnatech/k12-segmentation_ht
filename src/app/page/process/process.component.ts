import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import * as outsideLabel from 'chartjs-plugin-piechart-outlabels';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  colors = ["#005e87", "#007c8b", "#00ada7", "#519136", "#abb030", "#e7b513"]

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
      labels: {

      },
    },
    tooltips: {
      enabled: true,
      mode: 'label',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
        align: 'bottom',
      }
    }
  };

  public pieChartOptions1: ChartOptions = {
    responsive: true,
    //maintainAspectRatio: false,
    legend: {
      position: 'left',
      labels: {

      },
    },
    tooltips: {
      enabled: true,
      mode: 'label',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
        align: 'bottom',
      }
    }
  };
  public pieChartLabels: Label[] = ["Direct", "Labatt Food Service", "Gold Star Food Service", "Martin Bros ", "Shamrock Foods", "Eastern Food Services", "Compass", " US Foods", "Gordon Food Service", "Sysco", "Kohl", "Reinhert Food Service", "SCS Ref", "US Cold Storage", "Keck",];
  public pieChartData: number[] = [1928466, 1670636, 1044028, 237011, 212402, 187605, 1278063, 1621564, 1478702, 1400070, 407849, 212946, 204706, 172595, 169988];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: [this.colors[0], this.colors[1], this.colors[1], this.colors[1], this.colors[1], this.colors[1], this.colors[2], this.colors[3], this.colors[3], this.colors[3], this.colors[4], this.colors[4], this.colors[4], this.colors[4], this.colors[4]],
    },
  ];


  public pieChartLabels2: Label[] = ["Direct", "Labatt Food Service", "US Foods", "Gordon Food Service", "Kohl Wholesale", "Ben E Keith", "Reinhart FoodService", "C.D. Hartnett Company", "Institutional Wholesale Co"];
  public pieChartData2: number[] = [605378, 203794, 141209, 122519, 50486, 24666, 8020, 2000, 3133];
  public pieChartColors2 = [
    {
      backgroundColor: [this.colors[0], this.colors[5], this.colors[1], this.colors[1], this.colors[2], this.colors[2], this.colors[2], this.colors[2], this.colors[2], this.colors[3], this.colors[4], this.colors[4], this.colors[4], this.colors[4], this.colors[4]],
    },
  ];
  
  SumofShady;
  SumofSunny;
  constructor() { }

  ngOnInit(): void {

    if(screen.width <= 768){
      this.pieChartOptions.maintainAspectRatio = false;
    }

    this.SumofShady = this.barChartData[0].data.reduce((a, b) => a + b, 0)
    this.SumofSunny = this.barChartData[1].data.reduce((a, b) => a + b, 0)
  }

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



}

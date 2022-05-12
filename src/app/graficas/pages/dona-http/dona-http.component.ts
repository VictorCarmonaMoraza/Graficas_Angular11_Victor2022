import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = [
   // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
   // [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#28B463',
        '#CB4335',
        '#99A3A4',
        '#512E5F',
        '#FADBD8',
      ]
    }
  ]

  constructor(private graficasService:GraficasService) { }

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe(data => {
    //     const labels = Object.keys(data);
    //     const values = Object.values(data);
    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push(values);
    // })

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe(({labels,values}) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
    })
  }

  randomize() {

  }

}

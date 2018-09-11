import {AfterViewChecked, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from 'angular2-chartjs';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements AfterViewChecked {

  @ViewChild('graphElement')
  private graphElement: ChartComponent;

  constructor() { }

  ngAfterViewChecked() {
    this.graphElement.chart.update();
  }

  @Input()
  type = 'bar';

  @Input()
  title = 'Titre';

  @Input()
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'First dataset',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'Second dataset',
        data: [55, 49, 70, 71, 66, 45, 50]
      }
    ]
  };

  @Input()
  options = {
    responsive: true,
    maintainAspectRatio: false
  };
}

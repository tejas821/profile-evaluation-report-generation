import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  labelsInput: string = '';
  dataInput: string = '';

  labels: string[] = [];
  chartData: number[] = [];
  onSubmit() {
    this.labels = this.labelsInput.split(',').map(label => label.trim());
    this.chartData = this.dataInput.split(',').map(value => parseFloat(value.trim()));

    // this.updateRadarChart();
  }
}

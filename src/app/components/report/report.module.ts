import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';

import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  { path: '', component: AnalysisComponent },
];

@NgModule({
  declarations: [AnalysisComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ButtonModule,
    ChartModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ReportModule { }

import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: () => import('./components/report/report.module').then(m =>m.ReportModule)},
    {path: '**', redirectTo:''}
];

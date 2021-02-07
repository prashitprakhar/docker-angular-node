import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FibCalculatorComponent } from './fib-calculator/fib-calculator.component';
import { OtherPageComponent } from './other-page/other-page.component';

const routes: Routes = [
  {
    path: 'other',
    component: OtherPageComponent,
  },
  {
    path: 'fib',
    component: FibCalculatorComponent,
  },
  {
    path: '**',
    redirectTo: 'fib'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

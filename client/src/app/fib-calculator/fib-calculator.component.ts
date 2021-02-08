import { Component, OnInit } from '@angular/core';
import { FiboService } from '../services/fibo.service';

@Component({
  selector: 'app-fib-calculator',
  templateUrl: './fib-calculator.component.html',
  styleUrls: ['./fib-calculator.component.scss']
})
export class FibCalculatorComponent implements OnInit {

  public enteredInput;
  // public seenIndicies: any[] = [1, 2, 3];
  public seenIndicies: any[] = [];
  public allCalculatedValues: any[] = [
    // {index: 5, value: 8},
    // {index: 6, value: 13}
  ];

  constructor(private fiboService: FiboService) { }

  ngOnInit(): void {
    this.callAllAPIs()
  }

  callAllAPIs() {
    this.fetchSeenIndicies()
  }

  fetchSeenIndicies() {
    this.fiboService.getIndicies()
    .then(indicies => {
      console.log("indicies ###", indicies);
      this.seenIndicies = indicies.data;
    })
    .catch(err => {
      console.log("indicies error ###", err)
    })
  }

  submit() {
    console.log("enteredInput @@@", this.enteredInput)
    this.fiboService.getValue(this.enteredInput)
      .then(data => {
        console.log("Current Value ###", data)
        this.allCalculatedValues = data.data;
        this.enteredInput = null;
      })
      .catch(err => {
        console.log("Error Current Value ###", err)
      })
  }

}

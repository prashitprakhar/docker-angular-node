import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.component.html',
  styleUrls: ['./other-page.component.scss']
})
export class OtherPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToHome() {
    this.router.navigate(['/fib'])
  }

}

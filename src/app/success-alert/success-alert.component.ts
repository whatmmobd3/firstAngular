import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  // styleUrls: ['./success-alert.component.css']
  styles: [
    `
      h2 {
        background-color: green ; border: 1px solid blue
      }
    `,
  ],
})
export class SuccessAlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

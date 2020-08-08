import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fn',
  templateUrl: './fn.component.html',
  styleUrls: ['./fn.component.css'],
})
export class FnComponent implements OnInit {
  lorem: String = 'This is secrect';
  isShowing: boolean = false;
  log = [];

  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    this.isShowing = !this.isShowing;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}

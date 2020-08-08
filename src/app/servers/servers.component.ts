import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  userName: String = '';
  isNull:boolean = true;
  constructor() {}

  ngOnInit(): void {}

  changeName(e:Event) {
    this.userName =(<HTMLInputElement>e.target).value
    if (this.userName !== '') {
      this.isNull = false
    }

  }

  resetNull(){
    this.userName = '';
    this.isNull = true;
  }
}

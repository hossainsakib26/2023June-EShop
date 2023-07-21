import {Component, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {}


  changeDrawerClass() {
    console.log(document.getElementById('back-drawer'));
    console.log(document.getElementById('drawer'));
  }

}

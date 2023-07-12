import {Component, OnInit, ElementRef} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {forEach} from "@angular-devkit/schematics";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  iconBars = faBars;

  constructor(public el: ElementRef) {
  }

  ngOnInit(): void {
  }

  on_off_Menu() {
    let element = document.getElementById('drawer-back') as HTMLElement;
    let drawerElem = document.getElementById('drawer') as HTMLElement;
    let list = element.classList;
    let drawerList = drawerElem.classList;
    list.forEach(
      (c, i) => {
        if ((i == 1) && (c === 'position-left-out-100')) {
          list.add('position-left-in-100');
          list.remove('position-left-out-100');
        } else if ((i == 1) && (c === 'position-left-in-100')) {
          list.add('position-left-out-100');
          list.remove('position-left-in-100');
        }
      }
    );
    drawerList.forEach(
      (c, i) => {
        if ((i == 1) && (c === 'position-left-out-100')) {
          drawerList.add('position-left-in-75');
          drawerList.remove('position-left-out-100');
        } else if ((i == 1) && (c === 'position-left-in-75')) {
          drawerList.add('position-left-out-100');
          drawerList.remove('position-left-in-75');
        }
      }
    );
  }

}

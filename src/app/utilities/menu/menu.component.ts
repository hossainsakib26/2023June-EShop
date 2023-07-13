import {Component, OnInit, ElementRef} from '@angular/core';
import { faBars, faArrowRightToBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  iconBars = faBars;
  iconLogin = faArrowRightToBracket;
  iconCart = faCartShopping;

  forMobile = true;

  constructor(public el: ElementRef) {
  }

  ngOnInit(): void {
    this.isForMenu();
  }

  isForMenu() {
    // (window.innerWidth > 768) ? this.forMobile = false : this.forMobile = true;
  }

  on_off_Menu() {
    let element = document.getElementById('drawer-back') as HTMLElement;
    let drawerElem = document.getElementById('drawer') as HTMLElement;
    let list = element.classList;
    let drawerList = drawerElem.classList;
    // console.log(Object.keys({list}));
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

  addOrDeleteClass(arr: any[]) {

  }

  turnOffMenu() {
    let element = document.getElementById('drawer-back') as HTMLElement;
    let drawerElem = document.getElementById('drawer') as HTMLElement;
    element.classList.remove('position-left-in-100');
    element.classList.add('position-left-out-100');
    drawerElem.classList.add('position-left-out-100');
    drawerElem.classList.remove('position-left-in-75');
  }

}

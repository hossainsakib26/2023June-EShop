import {Component, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
  }


  changeDrawerClass() {
    let drawer = this.el.nativeElement.querySelector('#drawer');
    let drawerBack = this.el.nativeElement.querySelector('#back-drawer');

    this.addOrRemoveClass(drawer);
    this.addOrRemoveClass(drawerBack);
  }

  addOrRemoveClass(element: HTMLElement) {
    element.classList.forEach(
      (c, i) => {
        if (i === 1) {
          if (c === 'back-drawer-out') {
            element.classList.remove('back-drawer-out');
            element.classList.add('back-drawer-in');
          } else if (c === 'back-drawer-in') {
            element.classList.remove('back-drawer-in');
            element.classList.add('back-drawer-out');
          }

          if (c === 'drawer-out') {
            element.classList.remove('drawer-out');
            element.classList.add('drawer-in');
          } else if (c === 'drawer-in') {
            element.classList.remove('drawer-in');
            element.classList.add('drawer-out');
          }
        }
      }
    )


  }

}

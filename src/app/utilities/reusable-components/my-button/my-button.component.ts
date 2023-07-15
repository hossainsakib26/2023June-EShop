import {Component, Input, OnInit, ElementRef} from '@angular/core';
import {
  faBars, faArrowRightToBracket,
  faCartShopping, faBookmark,
  faTrash, faSquarePen, faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {

  @Input() title: string = '';
  @Input() type = 'button';
  @Input() designType = 'icon-text'; // icon, text
  @Input() btnSize = 's'; //s = small, l = large, x = extra large,

  typesBtn = '';
  sizeBtn = '';
  btnColor = '';

  constructor() {
  }

  ngOnInit(): void {

    this.typesBtn = (this.designType === 'icon-text') ? 'btn-icon-text'
      : (this.designType === 'icon') ? 'btn-icon' : 'btn-text';

    this.sizeBtn = (this.btnSize == 'x') ? 'btn-x'
      : (this.btnSize == 'l') ? 'btn-l' : 'btn-s';

    this.getBtnColor();
  }

  hasIcon(): boolean {
    return (this.designType === 'icon-text') ? true
      : (this.designType === 'icon') ? true : false;
  }

  getIcon(): any {
    let iconName;
    if (this.title.toLowerCase() === 'save') {
      iconName = faBookmark;
    } else if (this.title.toLowerCase() === 'delete') {
      iconName = faTrash;
    } else if (this.title.toLowerCase() === 'menu') {
      iconName = faBars;
    } else if (this.title.toLowerCase() === 'update') {
      iconName = faSquarePen;
    } else if (this.title.toLowerCase() === 'edit') {
      iconName = faPenToSquare;
    } else if (this.title.toLowerCase() === 'login') {
      iconName = faArrowRightToBracket;
    } else if (this.title.toLowerCase() === 'cart') {
      iconName = faCartShopping;
    }
    return iconName;
  }

  getBtnColor(): string {
    switch (this.title != '') {
      case (this.title.toLowerCase() == 'save'): {
        this.btnColor = 'btn-green';
        break;
      }
      case (this.title.toLowerCase() == 'update'): {
        this.btnColor = 'btn-yellow';
        break;
      }
      case (this.title.toLowerCase() == 'delete'): {
        this.btnColor = 'btn-red';
        break;
      }
      case (this.title.toLowerCase() == 'edit'): {
        this.btnColor = 'btn-yellow';
        break;
      }
      case (this.title.toLowerCase() == 'menu'): {
        this.btnColor = 'btn-menu-color';
        break;
      }
      case (this.title.toLowerCase() == 'cart'): {
        this.btnColor = 'btn-sky-blue';
        break;
      }
      default: {
        this.btnColor = 'btn-green';
        break;
      }
    }
    return this.btnColor;
  }

}

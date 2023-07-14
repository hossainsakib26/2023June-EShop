import {Component, Input, OnInit} from '@angular/core';
import {
  faBars, faArrowRightToBracket,
  faCartShopping, faBookmark,
  faTrash,
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

  // typesBtn = (this.designType === 'icon-text')? 'btn-icon-text'
  //   : (this.designType === 'icon')? 'btn-icon' : 'btn-text';
  typesBtn = '';
  constructor() {}

  ngOnInit(): void {
    this.typesBtn = (this.designType === 'icon-text')? 'btn-icon-text'
      : (this.designType === 'icon')? 'btn-icon' : 'btn-text';
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
    }
    return iconName;
  }

  setClasses() {
    let el = document.getElementById(`${this.btnSize + this.title.toLowerCase() + this.designType}`) as HTMLElement;
    console.log(el.classList);
    if (this.designType === 'icon-text') {
      el.classList.add('btn-icon-text');
    } else if (this.designType === 'icon') {
      el.classList.add('btn-icon');
    } else if (this.designType === 'text') {
      el.classList.add('btn-text');
    }

  }

}

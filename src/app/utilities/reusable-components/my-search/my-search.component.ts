import {Component, Input, OnInit} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.scss']
})
export class MySearchComponent implements OnInit {

  search = faSearch;
  @Input() searchSize = 'x';
  formSize = '';

  ngOnInit(): void {
    this.setSizeClass();
  }

  setSizeClass() {
    if (this.searchSize === 'x') {
      this.formSize = 'search-size-x';
    } else if (this.searchSize === 'l') {
      this.formSize = 'search-size-l';
    } else if (this.searchSize === 's') {
      this.formSize = 'search-size-s';
    }
  }

}

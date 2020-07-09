// import { Component, Input, OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
  // styleUrls: ['./list.component.css']
})
// export class ListComponent implements OnInit {
export class ListComponent {
  @Input() aptList;
  // constructor() { }
  // ngOnInit(): void {
  // }
  @Output() deleteEvt = new EventEmitter();

  handleDelete(theApt: object) {
    // console.log(theApt);
    this.deleteEvt.emit(theApt);
  }
}

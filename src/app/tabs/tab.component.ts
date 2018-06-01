import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <ng-content select=".tab-title"></ng-content>
    <ng-content select=".tab-content"></ng-content>
  `,
})
export class TabComponent implements OnInit {
  @Input() tab: object;
  
  constructor() { }

  ngOnInit() {
  }

}

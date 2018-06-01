import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
  <ng-content></ng-content>
  `,
})
export class TabComponent implements OnInit {
  @Input() tab: object;
  
  constructor() { }

  ngOnInit() {
  }

}

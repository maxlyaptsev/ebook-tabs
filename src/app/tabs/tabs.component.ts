import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements OnInit {
  @Input() tabs: any;
  
  newTabTitle = 'new tab title';
  newTabContent = 'new tab content';


  constructor() { }

  ngOnInit() {
  }

  public inc() {
    var id = this.tabs.length + 1;
    this.tabs.push({
      "id": id,
      "title": 'title ' + id,
      "content": 'content ' + id,
      "active":false
    });
  }

  public dec() {

    // new active tab now is a first tab
    if(this.tabs[this.tabs.length-1].active) {
      this.tabs[0].active = true;
    }

    this.tabs = this.tabs.slice(0, -1);
  }


  public addCustomTab() {
    var id = this.tabs.length + 1;
    this.tabs.push({
      "id": id,
      "title": this.newTabTitle,
      "content": this.newTabContent,
      "active":false
    });
  }

  // select tab by index
  public select(index) {
    // all other tabs now id not acive
    for (let item of this.tabs) {
      item.active = false;
    }

    // but current tab is active
    this.tabs[index].active = true;
  }

  // remove tab by index
  public remove(index) {

    if(this.tabs[index].active) {
      this.tabs[0].active = true;
    }

    this.tabs.splice(index, 1)
  }

}

import { Component } from '@angular/core';
import { Tab } from './tabs/tab';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  tabs: Tab[] = [
    { id: 1, title: "title 1", content: "content 1", active: true },
    { id: 2, title: "title 2", content: "content 2", active: false },
  ];
}

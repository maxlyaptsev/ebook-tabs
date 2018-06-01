import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabTitleComponent } from './tab-title.components';
import { TabContentComponent } from './tab-content.component';

@NgModule({
  imports: [ BrowserModule, CommonModule, FormsModule ],
  exports: [ TabsComponent, TabComponent, TabTitleComponent, TabContentComponent ],
  declarations: [TabsComponent, TabComponent, TabTitleComponent, TabContentComponent],
})
export class TabsModule { }

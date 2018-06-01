import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
import { AppComponent } from '../app.component';
import { TestComponent } from '../test.component';
import { HelloComponent } from '../hello.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [ BrowserModule, CommonModule, FormsModule ],
  exports: [ TabsComponent ],
  declarations: [TabsComponent, TabComponent, TestComponent, HelloComponent],
})
export class TabsModule { }

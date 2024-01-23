import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { SlotChildComponent } from './components/slot-child/slot-child.component';
import { SlotParentComponent } from './components/slot-parent/slot-parent.component';
import { VChildComponent } from './components/v-child/v-child.component';
import { VParentComponent } from './components/v-parent/v-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SlotChildComponent,
    SlotParentComponent,
    VChildComponent,
    VParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

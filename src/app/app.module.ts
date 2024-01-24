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
import { VcChildComponent } from './components/vc-child/vc-child.component';
import { VcParentComponent } from './components/vc-parent/vc-parent.component';
import { CChildComponent } from './components/c-child/c-child.component';
import { CParentComponent } from './components/c-parent/c-parent.component';
import { CGrandChildComponent } from './components/c-grand-child/c-grand-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SlotChildComponent,
    SlotParentComponent,
    VChildComponent,
    VParentComponent,
    VcChildComponent,
    VcParentComponent,
    CChildComponent,
    CParentComponent,
    CGrandChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

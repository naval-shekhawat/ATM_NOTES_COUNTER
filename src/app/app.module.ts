import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DetailPanel } from './detail-panel/detail-panel.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { ATMService } from './services/atm-service';

@NgModule({
  declarations: [
    AppComponent,
    DetailPanel,
    LeftPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ATMService],
  bootstrap: [AppComponent]
})
export class AppModule { }

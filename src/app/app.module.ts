import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ChatmsgComponent } from './chatmsg/chatmsg.component';
import { MsghistoryComponent } from './msghistory/msghistory.component';
import { TimedateComponent } from './timedate/timedate.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    ChatmsgComponent,
    MsghistoryComponent,
    TimedateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

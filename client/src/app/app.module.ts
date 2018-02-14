import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';

import {
  MatGridListModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatButtonToggleModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDividerModule,
  MatListModule,
  MatSnackBarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ThingService } from './thing.service';
import { ThingsComponent } from './things/things.component';
import { SwitchComponent } from './switch/switch.component';
import { SwitchLevelComponent } from './switch-level/switch-level.component';
import { ContactSensorComponent } from './contact-sensor/contact-sensor.component';
import { SwitchService } from './switch.service';
import { SocketService } from './socket.service';
import { MotionSensorComponent } from './motion-sensor/motion-sensor.component';
import { LockComponent } from './lock/lock.component';
import { LockService } from './lock.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { AlarmSystemStatusComponent } from './alarm-system-status/alarm-system-status.component';
import { AlarmSystemService } from './alarm-system.service';

@NgModule({
  declarations: [
    AppComponent,
    ThingsComponent,
    SwitchComponent,
    SwitchLevelComponent,
    ContactSensorComponent,
    MotionSensorComponent,
    LockComponent,
    WelcomeComponent,
    DashboardComponent,
    HelpComponent,
    AlarmSystemStatusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    AppRoutingModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDividerModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: [ThingService, SwitchService, SocketService, LockService, AlarmSystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoggedRoutingModule } from './logged-routing.module';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SidenavComponent, ToolbarComponent, MainPageComponent, LogInComponent],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class LoggedUserModule { }

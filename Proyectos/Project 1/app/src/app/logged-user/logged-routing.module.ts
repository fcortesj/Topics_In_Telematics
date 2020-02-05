import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LogInComponent } from './components/log-in/log-in.component';

/**
 * Class used to list the components paths
 * Then is defined default path and wich childern paths will be considered 
 */
const routes: Routes = [
   {
     path: '',
     component: SidenavComponent,
     children: [
        {
          path:'mainPage',
          component:MainPageComponent
        },
        {
          path:'login',
          component:LogInComponent
        }
     ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }

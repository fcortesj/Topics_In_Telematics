import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren: './logged-user/logged-user.module#LoggedUserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/**
 * This class defines the main route to the module logged user.
 */
export class AppRoutingModule { }

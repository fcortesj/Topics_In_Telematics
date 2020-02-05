import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Input } from '../../../input.model';
import { InputsService} from '../../../inputs.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

/**
 *  This class is used to generate the login form using google api
 *  Also we generate the table of inputs from the database
 */
export class LogInComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;
  private inputs = [];
  private assignedInputs = [];

  constructor(private authService: AuthService, private inputservice: InputsService) { }

  ngOnInit() {
    //Subscribe the user and check if he is already logged in or not
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    //Runs getInputs() by default
    this.getInputs();
  }

  signInWithGoogle(): void {
    //Sign in with google using provider api
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    //Sign out from the api
    this.authService.signOut();
  }

  getInputs() : void {
    //Returns all inputs and put them into a matrix
    this.inputservice.getInputs().subscribe((res : any[])=>{
      this.inputs = res;
      this.assignCopy();
    });
  }

  filterInputs(value_filter) : void {
    //Filter inputs by username
    if(!value_filter){
      this.assignCopy();
    }
    else {
      this.assignedInputs = Object.assign([], this.inputs).filter(
        input => input.username.toLowerCase().indexOf(value_filter.toLowerCase()) > -1
      );
    }
  }

  assignCopy() : void {
    //Assign copy of list to by print on the page
    this.assignedInputs = Object.assign([], this.inputs);
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Input } from './input.model';
import { InputsService} from './inputs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'guiApp';
  inputs = [];
  assignedInputs = [];

  constructor(private inputservice: InputsService){}

  ngOnInit() {
    //Runs getInputs() by default
    this.getInputs();
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

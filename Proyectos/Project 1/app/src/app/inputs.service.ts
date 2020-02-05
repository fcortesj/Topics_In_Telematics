import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Input } from './input.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

/**
 * Service wich connects to the back-end to get all inputs.
 */
export class InputsService {

  //Back-End App URL
  private inputURL = "http://127.0.0.1:5000/manage_inputs";

  constructor(private http:HttpClient) { }

  getInputs(): Observable<Input[]>{
    //Returns the list of all inputs containted in the database
    return this.http.get<Input[]>(this.inputURL, httpOptions);
  }
}

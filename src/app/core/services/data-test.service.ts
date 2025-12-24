import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shopping } from '../interfaces/shoppings.interface';

@Injectable({
  providedIn: 'root'
})
export class DataTestService {
  // private apiUrl = 'https://jsonplaceholder.typicode.com/users'; 
  // <-- backend falso para probar
  private apiUrl = 'http://localhost:3000/shopping';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  getShoppings(): Observable<Shopping[]>{
    return this.http.get<Shopping[]>(this.apiUrl);
  }
}

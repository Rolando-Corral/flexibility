import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shop } from '../interfaces/shop.interface';

@Injectable({
  providedIn: 'root'
})
export class DataTestService {
  private apiUrl: string = 'http://localhost:3000/shop';

  constructor(private http: HttpClient) { }

public getShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.apiUrl);
  
  }

}

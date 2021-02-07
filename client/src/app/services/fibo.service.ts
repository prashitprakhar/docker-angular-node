import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FiboService {

  public APIEndpoint = environment.apiEndpoint.api;

  constructor(private http : HttpClient) { }

  getValue(index): Promise<any> {
    return this.http.get(`${this.APIEndpoint}/values/current`).toPromise()
  }

  getIndicies(): Promise<any> {
    return this.http.get(`${this.APIEndpoint}/values/all`).toPromise()
  }

 }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../../environments/environment';

class StaticData {
  id: string;
  staticPageTitle: string;
  staticPageText: string;
}

@Injectable({
  providedIn: 'root'
})
export class SataticdataService {

  staticData;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<StaticData[]>(environment.local_base_url + '/static-page');
  }

  getById(id: any) {
    console.log(environment.local_base_url + 'static-page/' + '5d8340bfdfbf871440b8241e');
    return this.http.get(environment.local_base_url + 'static-page/' + this.staticData);
  }

  create(staticData: StaticData) {
    console.log(staticData);
    return this.http.post(environment.local_base_url + 'static-page', staticData);
  }

  update(staticData: StaticData) {
      return this.http.put(environment.local_base_url + 'static-page/' + this.staticData, StaticData);
  }

  delete(id: any) {
      return this.http.delete(environment.local_base_url + 'static-page/'  + this.staticData);
  }
  // ------user set and get functions
  setStaticData(data: any) {
    this.staticData = data;
  }

  getSaticData() {
    return this.staticData;
  }
}

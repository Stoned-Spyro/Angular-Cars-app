import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/Car';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  url = 'http://localhost:3000/cars';
  constructor(private http:HttpClient) { }

  getCars():Observable<Car[]> {
    return this.http.get(this.url) as Observable<Car[]>;
  }

  getCar(id: number):Observable<Car> {
    // return this.http.get(this.url + '/' + id) as Observable<Car>;
    return this.http.get(`${this.url}/${id}`) as Observable<Car>;
  }

  deleteCar(id: number):Observable<Car> { 
    return this.http.delete(`${this.url}/${id}`)  as Observable<Car>;
  }

  updateCar(id: number, name: string, model: string, price: number) :Observable<Car>{
    return this.http.put(`${this.url}/${id}`,{
        "id":id,
        "name":name,
        "model":model,
        "price":price,
    }) as  Observable<Car>
    
  }
  addCar(id :number, name: string, model: string, price: number):Observable<Car>{
    return this.http.post(`${this.url}`,{
      "id": id,
      "name": name,
      "model": model,
      "price": price
    }) as Observable<Car>
  }




}

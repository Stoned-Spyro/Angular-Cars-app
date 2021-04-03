import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import {delay} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import {User} from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private http: HttpClient) { }

  url = 'http://localhost:3000/users';

  user: User


  isAuthenticated = true

  register(){}

  login(): Observable<any>{
      this.isAuthenticated=true;
      console.log('є')
      return of({})
  }     

  signOut(): Observable<any>{
    this.isAuthenticated=false;
    localStorage.clear();
    this.router.navigate(['/login']);
    return of({})
  }
  getUsers():Observable<User[]> {
    return this.http.get(this.url) as Observable<User[]>;
  }
  createUser(username, email, password):Observable<User[]>{
    return this.http.post(`${this.url}`,{
      "username":username,
      "email":email,
      "password":password
    })as Observable<User[]>;
  }
  getUser(id:number):Observable<User>{
    return this.http.get(`${this.url}/${id}`) as Observable<User>;
  }
}

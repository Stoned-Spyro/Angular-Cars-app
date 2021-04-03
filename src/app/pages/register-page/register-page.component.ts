import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private location: Location, private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  regist(registForm){
    var username=registForm.value.username
    var email=registForm.value.email
    var password=registForm.value.password
    if(registForm.valid){
      this.userService.createUser(username, email, password).subscribe()
      this.router.navigate(['/login'])
    }
    else{
      alert('Будь ласка, введіть правильні дані')
    }
  }
  goBack(){
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { };

  users: User[]


  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      // console.log(this.cars);
    })

  } 

    onSubmit(myForm){
    let email = myForm.value.email;
    let password = myForm.value.password; 
    let emails=this.users.map(el=>el.email)
    let checkUser=emails.indexOf(email)
    var keys=Object.keys(this.users)
    var user= this.users[keys[checkUser]];
    localStorage.setItem('1',user.id)
    if(myForm.valid && checkUser != -1){
      if(email==user.email && password==user.password){
      this.userService.login()
      .subscribe(()=>{
        this.router.navigate(['/auth/home'])
        }
      )
      }
      else{
        alert('Не вірний пароль')
      }
    }
    else{
      alert('Не вірна пошта, або введені не коректні дані')
    }
  }

  regist(){
    this.router.navigate(["/register"])
  }
}

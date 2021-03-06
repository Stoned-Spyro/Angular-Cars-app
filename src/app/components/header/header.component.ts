import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: User

  ngOnInit(): void {
    var  uID=Number(localStorage.getItem('1'))
    this.userService.getUser(uID).subscribe((data)=>{
      this.user=data
    })
  }

  signOut(){
    this.userService.signOut()
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginservice :LoginService,private router: Router) { }

  ngOnInit() {
    this.logout();
  }

  logout(){
    this.loginservice.logout().
    subscribe(
      (data:any[])=>{
        localStorage.removeItem('user_type');
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        this.router.navigate(['/login']);
      }
    )
  }
}

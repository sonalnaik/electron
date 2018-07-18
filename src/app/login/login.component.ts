import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private loginservice:LoginService, private router: Router,) { }

  ngOnInit() {
  }

  login(){
    
    var username =this.model.username;
    var password =this.model.password;
    this.loginservice.login(username,password).
      subscribe(
        (data:any={}) =>{
          if(data.response=='success'){
           localStorage['user_type']=data.user_type;
           localStorage['username']=data.username;
           localStorage['password']=data.password;
           this.router.navigate(['content']); 
          }else{
            alert('failed');
          }
        }
      )
  }
}

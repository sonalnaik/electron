import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable, Subscription } from 'rxjs/Rx';
import { Http, Response, Headers,                                                                                                                                                                                                                                              RequestMethod, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import {ResponseContentType } from '@angular/http';
@Injectable()
export class LoginService {

  constructor(private httpclient:HttpClient) { } 
  //private _headers = new HttpHeaders().set('Content-Type', 'application/force-download\n');
  
  login(username,password){ 
   
    return this.httpclient.post('http://172.10.1.6:8692/pru-reports-repo/login_angular.php',
    {
      username:username,
      password:password
    });
  } 

  getData(id):Observable<any>{
    return this.httpclient.get('http://172.10.1.6:8692/pru-reports-repo/reports/automated-report-angular.php?id='+id);
  }

  download(id,fileName):Observable<any>{
    
     return this.httpclient.get('http://172.10.1.6:8692/pru-reports-repo/download-angular.php?strFilename=Automated/'+id+'/'+fileName, {
       responseType: 'blob'
    });
    
  }
  logout(){
    return this.httpclient.get('http://172.10.1.6:8692/pru-reports-repo/logout_angular.php');
  }

  

}

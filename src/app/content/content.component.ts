import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LoginService} from '../login.service';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public show:boolean=false;public showdata:any[];public files=[];
  constructor(private route: ActivatedRoute,private loginservice:LoginService,private router:Router) { }
private display ='';
   
  ngOnInit() {
    
  }

  private user_type=localStorage['user_type'];

  toggle(){
    this.show = !this.show; 
    
  }
  getParams(id){
    this.files=[];
    this.loginservice.getData(id).
      subscribe(
        (data:any[])=>{
          
              this.showdata=data['group1'];
            var i=0;
            for(i=0;i< data['files'].length;i++){
              this.files.push({'name':data['files'][i]['name'],'date':data['files'][i]['date'],'originalName':data['files'][i]['originalName']});
              
           
          }
          
          
        }
      )
    
  }
    download(fileName){
      //http://javabypatel.blogspot.in/2017/11/download-file-in-angular2.html
      //killer code..takes so much time to just include blob as responseType in service
      
       const id = this.route.snapshot.paramMap.get('id');
       this.loginservice.download(id,fileName)
       .subscribe(
            success => {
                
                 const blob = new Blob([success], {type: 'application/octet-stream'});
                 FileSaver.saveAs(blob, fileName+'.zip');
                
            }, 
            err => {
                alert("Server error while downloading file.");
            }
        );
       
    }
}

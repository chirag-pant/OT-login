import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import{FormControl} from '@angular/forms';
import { LdapLoginService } from './ldaplogin.service';
import { LoginModel } from './login.model';


@Component({
  selector: 'app-ldaplogin',
  templateUrl: './ldaplogin.component.html',
  styleUrls: ['./ldaplogin.component.css'],
  providers:[LdapLoginService]
})
export class LdaploginComponent implements OnInit {
  loginForm:FormGroup;
  response:LoginModel;
  show:boolean=false;
  constructor(private fb:FormBuilder, private service:LdapLoginService) {
   
  
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: new FormControl ('', [Validators.required]),
      password:new FormControl ('', [Validators.required]),
    
      })
    ;
  
 }
 check(username:any, password:any)
 {
   this.service.authenticate(username,password)
 .subscribe((data) => 
   { let s:any=data;
      this.save(s);
    this.show=true;
  
   
  

  // .subscribe(
  //   data =>{
  //   this.response=data.toString();
  //   },
  //   error => console.log(error)
  // )
  // console.log(this.response)
 })
}

 save(object:any){
    
this.response=object;
console.log(this.response.msg)
}}

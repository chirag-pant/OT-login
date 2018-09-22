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

    console.log("s"+s);
    console.log(username,password);
      this.save1(s);
      this.show=true;
  
 })
}



 save1(object:any){
    console.log(object)

this.response=object;

console.log(this.response)

}}

import { Injectable } from "@angular/core";
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";




const httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json'
})
}; 


@Injectable()
export class LdapLoginService{
    message:string;
constructor(private http: HttpClient){
    

}
public authenticate(username,password):Observable<any>{
    {
 
    console.log(username,password)
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE,OPTIONS');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
   

    var url='http://10.71.68.177:8080/authenticate'
 

    console.log( this.http.post(url,{username,password}));
    let body=JSON.stringify({"userName":username.toString(),"password":password.toString()})

     

     return this.http.post(url,body,httpOptions);
          
  }
    
}}

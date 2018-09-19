import { Injectable } from "@angular/core";
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { HttpModule } from '@angular/http'; 
import { LoginModel } from "./login.model";


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
    //    console.log(this.http.get('http://localhost:8080/app/login/abcd/1234') 
    //    .toPromise()
    //    .then(response => JSON.stringify(response)));
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE,OPTIONS');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
    return this.http.get('http://localhost:8080/app/login/'+ username+ '/'+ password);
  }
    
}}

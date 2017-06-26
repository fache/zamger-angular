import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class LoginService {
	userFix:string;
	passFix:string;
	private _url: string = "https://zamger.etf.unsa.ba/auth.php";
 	private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
 	constructor(private _http: Http){}
 	/*getLogin(){
 		return this._http.get(this._url)
 			.map((response: Response) => response.json())
 	}*/
 	postLogin(user:string, pass:string){
 		this.userFix=user;
 		this.passFix=pass;
 		let logpodaci ='login='+user+'&pass='+pass;
 		return this._http.post(this._url, logpodaci , {headers: this.headers})
   		 .map((response: Response) => response.json())
    /*  .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);*/
 	}
 }
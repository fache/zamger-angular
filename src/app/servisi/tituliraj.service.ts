import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TitulirajService {


	private _url: string = "https://zamger.etf.unsa.ba/index.php?sta=ws%2Fosoba&PHPSESSID="
 	//private _url: string = "http://localhost/ll/index.php?sta=ws%2Fosoba&PHPSESSID="+JSON.parse(document.cookie).sid;
 	constructor(private _http: Http){
 		this._url+=JSON.parse(document.cookie).sid;
	}
 	getTituliraj(){
 		return this._http.get(this._url)
 			.map((response: Response) => response.json())
 	}

 }
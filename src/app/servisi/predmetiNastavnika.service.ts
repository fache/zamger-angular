import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class PredmetiNastavnikaService {

	private _url: string = "https://zamger.etf.unsa.ba/index.php?sta=ws%2Fnastavnik_predmet&PHPSESSID=";
 	//private _url: string = "http://localhost/ll/index?sta=ws%2Fnastavnik_predmet&PHPSESSID=";
 	constructor(private _http: Http){
 		this._url+=JSON.parse(document.cookie).sid;
 	}

 	getPredmeti(){
 		return this._http.get(this._url)
 			.map((response: Response) => response.json())
 	}

 }
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Sesija } from '../sesija';
import 'rxjs/add/operator/toPromise';
import { TitulirajService } from '../servisi/tituliraj.service';

@Component({
	selector: 'navigacija',
  	templateUrl: './navigacija.component.html'
})

export class Navigacija implements OnInit{
	ime:string;
	prezime:string;
	poruke:number;
	titula:string;
	
	constructor(private _titulirajService: TitulirajService, private router: Router){}
	ngOnInit(): void {
		this.ime="Ime";
		this.prezime="Prezime";
		this.poruke=0;

	    this._titulirajService.getTituliraj().subscribe(resLoginData => 	{
				this.titula = JSON.stringify(resLoginData);
				if(JSON.parse(this.titula).success=="true"){
					this.ime=JSON.parse(this.titula).data.ime;	
					this.prezime=JSON.parse(this.titula).data.prezime;
				}
				else{
					console.log("Greska navigacija: "+JSON.parse(this.titula).message);
					console.log(document.cookie);
				}
			}					
			
		);
	}
	












	logOutCookie(){
		document.cookie = "";
		console.log(document.cookie);
		//this.router.navigate(['/login']);
		//redirect to /
	}
}

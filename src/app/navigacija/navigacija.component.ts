import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Sesija } from '../sesija';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'navigacija',
  	templateUrl: './navigacija.component.html'
})

export class Navigacija implements OnInit{
	ime:string;
	prezime:string;
	constructor(private router: Router){}
	ngOnInit(): void {
		this.ime="Ime";
		this.prezime="Prezime";
	}
	
	logOutCookie(){
		document.cookie = "";
		console.log(document.cookie);
		//this.router.navigate(['/login']);
		//redirect to /
	}
}

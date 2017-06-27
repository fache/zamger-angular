import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Sesija } from '../sesija';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Navigacija } from '../navigacija/navigacija.component';
@Component({
  templateUrl: './pregled-predmeta.component.html'
})

export class PregledPredmeta implements OnInit{
	id:string;
	sid:string;
	constructor(private router: Router){}
	ngOnInit(): void {
		if(document.cookie.length<=15){
			this.router.navigate(['/login']);
			console.log("Vracanje na login");
		}
		else{
			let kolacic = JSON.parse(document.cookie);
			this.id =kolacic.id;
			this.sid = kolacic.sid;
			//console.log(kolacic);
		}
	}
	
	/*id: string;
	sid: string;
	userSend:string;
	passSend:string;
	ses:Sesija=new Sesija();
	constructor(private loginService: LoginService, private route: ActivatedRoute){
		this.route.params.subscribe(
			params => {
				this.id=params['id'];
			}
		);		
	}
	ngOnInit(): void {
		this.userSend=this.loginService.userFix;
		this.passSend=this.loginService.passFix;
		this.loginService.postLogin(this.userSend, this.passSend)
			.subscribe(resLoginData => this.ses = resLoginData);			
			
    }
    */


}
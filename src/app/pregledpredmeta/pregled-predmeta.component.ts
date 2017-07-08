import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Sesija } from '../sesija';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Navigacija } from '../navigacija/navigacija.component';
import { PredmetiNastavnikaService } from '../servisi/predmetiNastavnika.service';
import { Predmeti } from '../predmeti';
@Component({
  templateUrl: './pregled-predmeta.component.html'
})

export class PregledPredmeta implements OnInit{
	id:string;
	sid:string;

	idPredmeta:string="55";
	predmetiString:string;


	constructor(private _predmetiNastavnikaService: PredmetiNastavnikaService, private router: Router){}
	ngOnInit(): void {
		if(document.cookie.length<=15){
			this.router.navigate(['/login']);
			console.log("Vracanje na login");
		}
		else{
			let kolacic = JSON.parse(document.cookie);
			this.id =kolacic.id;
			this.sid = kolacic.sid;

			
			
			this._predmetiNastavnikaService.getPredmeti().subscribe(resLoginDataa => 	{
				this.predmetiString = JSON.stringify(resLoginDataa);
			
				console.log(this.predmetiString);
				
				if(JSON.parse(this.predmetiString).success=="true"){
					//this.idPredmeta=JSON.parse(this.predmetiString).data.predmeti[0].id;	
					

					console.log("testna");
				}
				else{
					console.log("Greska predmeti: "+JSON.parse(this.predmetiString).message);
				}
								
				}
			);

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
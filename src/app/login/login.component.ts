import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Sesija } from '../sesija';
import 'rxjs/add/operator/toPromise';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//ako je logovan redirect na ''
export class LoginComponent implements OnInit{
	username='';
	password='';
	logApi: Sesija=new Sesija();	
	greskaPrijave: string;
	constructor(private _loginService: LoginService, private router: Router){}
	ngOnInit(): void {
    }

	onSubmit(loginPodaci: any){
		
		if (document.cookie.length<=15){
			this.username=loginPodaci.uname;
			this.password=loginPodaci.pass;
		    this._loginService.postLogin(this.username, this.password)
		    	.subscribe(resLoginData => 	{
					this.logApi = resLoginData;
					if (this.logApi.success=='true'){ //??????????????????????????????????????????????????????
						let kolacic = JSON.stringify({ "id": this.logApi.userid , "sid": this.logApi.sid});
						//console.log("kolacic");
						document.cookie = kolacic;
						//document.cookie = "id="+this.logApi.userid;
						//document.cookie = "sid="+this.logApi.sid;
						
						//pozivanje API osoba i prosljedjivanje parametara
						this.router.navigate(['/pregled-predmeta']);
					}
					else{
						this.greskaPrijave='Upisali ste pogrešne korisničke podatke';
					}
				}
			);
		}
	}
	
}

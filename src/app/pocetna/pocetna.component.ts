import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  template: ''
})

export class Pocetna{
	constructor(private router: Router){}
	ngOnInit(): void {
		let id: number;
		//skontati uslov
		if(document.cookie.length<=15){
			this.router.navigate(['/login']);
		}
		else{
			//iz cookia ocitati podatak userid
			//id=
			this.router.navigate(['/pregled-predmeta', id]);
		}


	}

}

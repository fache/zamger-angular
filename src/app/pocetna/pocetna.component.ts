import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  template: ''
})

export class Pocetna implements OnInit{
	constructor(private router: Router){}
	ngOnInit(): void {
		//skontati uslov
		if(document.cookie.length<=15){
			this.router.navigate(['/login']);
		}
		else{
			this.router.navigate(['/pregled-predmeta']);
		}


	}

}

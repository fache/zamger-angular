import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { TitulirajService } from './servisi/tituliraj.service';
import { PredmetiNastavnikaService } from './servisi/predmetiNastavnika.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService, TitulirajService, PredmetiNastavnikaService]
})
export class AppComponent {

}

import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/service/auth.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user:boolean = false
  constructor(private authSrv: AuthService){}

  ngOnInit():void {
    if(localStorage.getItem('utenteloggato')){
      this.user = true
    }

  }
  logout() {
    this.authSrv.logout();
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  page!: number;
  pageSize!: number;
  response: any;
  users!: Array<User>;

  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    this.chiamaUtenti();
  }

  chiamaUtenti(){
    this.authSrv.getAll(0).subscribe(p =>{
      console.log(p);
      this.response = p;
      this.users = p.content
    })
  }

  pagine(pag:number){
    this.authSrv.getAll(pag).subscribe(res =>{
      this.response = res;
      this.users = res.content
    })

  }

  contatotre(cont: number){
    return new Array(cont);

  }

}

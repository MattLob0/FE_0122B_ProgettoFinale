import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';


export interface AuthData {
  accessToken:string;
  user:{
    email:string;
    id:number;
    name:string;
  }
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  pathApi: string;
  //user!: User
  private authSubj = new BehaviorSubject<null | AuthData>(null);
  accessToken!: string;

  user$ = this.authSubj.asObservable()
  timeoutLogout:any


  constructor(private http: HttpClient, private router: Router) {

    this.pathApi = environment.baseUrl;
  }

  login(data:any){
    return this.http.post<AuthService>(`${this.pathApi}/login`, data).pipe(
      tap((data)=>{
        console.log(data);
        localStorage.setItem('utente', JSON.stringify(data))
      })
    )
  }

  getAll(dati:number){
    return this.http.get<any>(this.pathApi + '/api/users?page=' + dati + '&size=20&sort=id,ASC');
  }

  signup(item:any) {
    return this.http.post<any>(this.pathApi + '/api/auth/signup', item);
  }

  logout(){
    this.authSubj.next(null);
    localStorage.removeItem('utenteloggato')
    this.router.navigate([''])
    if (this.timeoutLogout) {
      clearTimeout(this.timeoutLogout)
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  pathApi = environment.baseUrl
  user!: User

  constructor(private http:HttpClient ,private fb: FormBuilder,private authSrv: AuthService,private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: new FormControl(''),
      password: new FormControl('')
    });

  }

  login(data: {value:any}) {
    console.log(data.value)
    this.http.post<any>(this.pathApi + '/api/auth/login', data.value).subscribe((res) => {
        this.user = res;
        localStorage.setItem('utenteloggato', JSON.stringify(this.user));
        alert('Utente loggato con successo!')
        this.router.navigate(['/lista']);
      });
  }
}

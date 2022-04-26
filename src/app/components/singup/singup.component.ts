import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/models/user';
import { HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  form!: FormGroup;
  user = {username: '', password: '', email: '', role: ['']}

  constructor(private fb: FormBuilder, private authSrv: AuthService, private router: Router) { }

  salvaUtente(datiForm: { value: { roles:any; username:string; password:string; email:string;}; }) {
    this.user.username = datiForm.value.username;
    this.user.password = datiForm.value.password;
    this.user.email = datiForm.value.email;
    this.user.role.splice(0,1)
    this.user.role.push(datiForm.value.roles);
    console.log(this.user)

    this.authSrv.signup(this.user).subscribe(res => {
      console.log(res);
      alert('Utente registrato correttamente!')
      this.router.navigate(['/login']);
    })
  }

  ngOnInit(): void {
    this.InizializzaForm();
  }

  InizializzaForm() {
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      roles: new FormControl('', [Validators.required])
    });
    this.form.controls['username'].setValue('');
    this.form.controls['password'].setValue('');
  }

}






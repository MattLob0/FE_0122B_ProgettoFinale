import { Component, OnInit } from '@angular/core';
import { ClientiService } from 'src/app/service/clienti.service';
import { Cliente } from 'src/app/models/cliente';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Fatture } from 'src/app/models/fatture';
@Component({
  selector: 'app-lista-clienti',
  templateUrl: './lista-clienti.component.html',
  styleUrls: ['./lista-clienti.component.scss'],
})
export class ListaClientiComponent implements OnInit {
  page!: number;
  pageSize!: number;
  response: any;
  cliente!: Cliente[];
  fatture!:Fatture[]
  form!:FormGroup;
  id!: number

  constructor(
    private clientiSrv: ClientiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inizializzaForm()
    this.chiamaUtenti();
  }


  chiamaUtenti() {
    this.clientiSrv.gettAll(0).subscribe((c) => {
      console.log(c);
      this.response = c;
      this.cliente = c.content;
    });
  }


  inizializzaForm() {
    this.form = this.fb.group({
      cerca: new FormControl()
    });
  }


  pagine(pag: number) {
    this.clientiSrv.gettAll(pag).subscribe((res) => {
      this.response = res;
      this.cliente = res.content;
    });
  }


  contatotre(cont: number){
    return new Array(cont);

  }

  Delete(name: string, id: number, i: number) {
		if (confirm("Sei sicuro di voler elimiare " + name)) {
			this.clientiSrv.delete(id).subscribe(c => {
				console.log(c);
				this.cliente.splice(i, 1);
			});
		}
	}
}

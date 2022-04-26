import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Comune } from 'src/app/models/comune';
import { Provincia } from 'src/app/models/provincia';
import { ClientiService } from 'src/app/service/clienti.service';
import { ComuniService } from 'src/app/service/comuni.service';
import { ProvinceService } from 'src/app/service/provincie.service';



@Component({
  selector: 'app-dettaglio-cliente',
  templateUrl: './dettaglio-cliente.component.html',
  styleUrls: ['./dettaglio-cliente.component.scss']
})
export class DettaglioClienteComponent implements OnInit {

  id!: number;
	form!: FormGroup;
	cliente!: Cliente;
	province!: Provincia[];
	comuni!: Comune[];
	tipiclienti!: any[];





  constructor(
    private fb: FormBuilder,
		private clientiService: ClientiService,
		private comuniService: ComuniService,
		private provinceService: ProvinceService,
		private router: Router,
		private route: ActivatedRoute,
   ) { }

   salva(DatiForm: { value: { indirizzoSedeOperativa: { comune: Comune; }; }; }) {
		console.log(DatiForm.value);

		this.comuni.forEach(item => {
			if (item.id == DatiForm.value.indirizzoSedeOperativa.comune.id) {
				DatiForm.value.indirizzoSedeOperativa.comune = item;
			}
		})
		this.clientiService.Save(this.id, DatiForm.value).subscribe(res => {
			console.log(res);
			this.router.navigate(['/lista-clienti']);
		});
	}





 ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.id = +params['id'];
    console.log(this.id);
    this.inizializzaForm();
    this.carica();
  });

 }

 inizializzaForm() {
  console.log('InizializzaForm');
  this.form = this.fb.group({
    ragioneSociale: new FormControl('', [Validators.required]),
    partitaIva: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    tipoCliente: new FormControl('', [Validators.required]),
    pec: new FormControl(''),
    telefono: new FormControl(''),
    nomeContatto: new FormControl(''),
    cognomeContatto: new FormControl(''),
    telefonoContatto: new FormControl(''),
    emailContatto: new FormControl('', [Validators.required]),
    indirizzoSedeOperativa: this.fb.group({
      via: new FormControl(''),
      civico: new FormControl(''),
      cap: new FormControl(''),
      localita: new FormControl(''),
      comune: this.fb.group({
        id: new FormControl ('', Validators.required),
        nome: '',
        provincia: {}
      })
    }),
  });
}

carica() {
  if (this.id !== 0) {
    this.clientiService.getById(this.id).subscribe(
      data => {
        console.log(data);
        this.cliente = data;
        this.form.patchValue({
          ragioneSociale: this.cliente.ragioneSociale,
          partitaIva: this.cliente.partitaIva,
          email: this.cliente.email,
          tipoCliente: this.cliente.tipoCliente,
          pec: this.cliente.pec,
          telefono: this.cliente.telefono,
          nomeContatto: this.cliente.nomeContatto,
          cognomeContatto: this.cliente.cognomeContatto,
          telefonoContatto: this.cliente.telefonoContatto,
          emailContatto: this.cliente.emailContatto,
          indirizzoSedeOperativa: {
            via: this.cliente.indirizzoSedeOperativa.via,
            civico: this.cliente.indirizzoSedeOperativa.civico,
            cap: this.cliente.indirizzoSedeOperativa.cap,
            localita: this.cliente.indirizzoSedeOperativa.localita
          },
        })
      }
    )
  }
  this.provinceService.GetAll(0).subscribe(res => this.province = res.content)
  this.comuniService.GetAll(0).subscribe(res => this.comuni = res.content)
  this.clientiService.getTipiClienti().subscribe(res => this.tipiclienti = res)
}
}

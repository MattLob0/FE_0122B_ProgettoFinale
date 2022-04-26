import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from 'src/app/models/fatture';
import { FattureService } from 'src/app/service/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.scss']
})
export class FattureComponent implements OnInit {
  idCliente!: number;
	page!: number;
	pageSize!: number;
	response: any;
	fatture!: Fatture[];

	constructor(
		private fattureService: FattureService,
		private router: Router,
		private route: ActivatedRoute,
	) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
			this.idCliente = +params['id'];
    this.chiamaFatt();
    });
  }

  chiamaFatt(){
    if (this.idCliente) {
			this.fattureService.getByCliente(this.idCliente, 0).subscribe(c => {
				console.log(c);
				this.response = c;
				this.fatture = c.content;
			});
		}
		else {
			this.fattureService.getAll(0).subscribe(c => {
				console.log(c);
				this.response = c;
				this.fatture = c.content;
			});
		}
  }

  pagine(pag:number){
    if (this.idCliente) {
			this.fattureService.getByCliente(this.idCliente, pag).subscribe(c => {
				console.log(c);
				this.response = c;
				this.fatture = c.content;
			});
		}
		else {
			this.fattureService.getAll(pag).subscribe(c => {
				console.log(c);
				this.response = c;
				this.fatture = c.content;
			});
		}

  }

  contatotre(i: number){
    return new Array(i);

  }
  Delete(name: number, id: number, i: number) {
		if (confirm("Sei sicuro di voler elimiare " + name)) {
			console.log("Implement delete functionality here");
			this.fattureService.Delete(id).subscribe(c => {
				console.log(c);
				this.fatture.splice(i, 1);
			});
		}
	}
}

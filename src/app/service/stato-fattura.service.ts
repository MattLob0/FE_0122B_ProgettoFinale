import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatoFatturaService {
  pathApi: string;
	constructor(private http: HttpClient) {
		this.pathApi = environment.baseUrl;
	}

	GetAll(p: number) {
		return this.http.get<any>(this.pathApi + '/api/statifattura?page=' + p + '&size=20&sort=id,ASC');
	}
}

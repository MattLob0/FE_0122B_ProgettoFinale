import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})

export class ProvinceService {

	pathApi: string;
	constructor(private http: HttpClient) {
		this.pathApi = environment.baseUrl;
	}

	GetAll(p: number) {
		return this.http.get<any>(this.pathApi + '/api/province?page=' + p + '&size=20&sort=id,ASC');
	}

}

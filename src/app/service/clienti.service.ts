import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  pathApi: string;

  constructor(private http: HttpClient) {
    this.pathApi = environment.baseUrl;
   }

   gettAll(p:number){
     return this.http.get<any>(this.pathApi + '/api/clienti?page=' + p + '&size=20&sort=id,ASC')
   }

   getById(id:number){
     return this.http.get<any>(this.pathApi + '/api/clienti/1' + id)
   }

   delete(id:number){
     return this.http.delete<boolean>(this.pathApi + '/api/clienti/' + id)
   }

   Save(id: number, item: any) {
		if (!id) {
			return this.http.post<any>(this.pathApi + '/api/clienti/', item);
		} else {
			return this.http.put<any>(this.pathApi + '/api/clienti/' + id, item);
		}
	}
  getTipiClienti() {
		return this.http.get<any>(this.pathApi + '/api/clienti/tipicliente');
	}

}

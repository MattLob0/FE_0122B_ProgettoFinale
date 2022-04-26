import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fatture } from '../models/fatture';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class FattureService {
  pathApi: string

  constructor(private http: HttpClient) {
    this.pathApi = environment.baseUrl;
   }

   getAll(dati:number){
     return this.http.get<any>(this.pathApi + '/api/fatture?page=' + dati + '&size=20&sort=id,ASC')
    }

    getById(id:number){
       return this.http.get<any>(this.pathApi + '/api/fatture/' + id)
    }

    getByCliente(id:number, dati: number){
      return this.http.get<any>(this.pathApi + '/api/fatture/cliente/3?page=' + dati + '&size=20&sort=id,ASC' + id)

    }

    Delete(id:number){
      return this.http.delete<boolean>(this.pathApi + '/api/fatture/' + id)
    }

    // newFattura(dati:{data:number, numero:number, anno:number, importo:number, nome:string, cliente:string}){
     //return this.http.post<any>(this.pathApi + '/api/fatture' + dati)
    //}

    salva(id: number, item: any) {
      if (id === 0) {
        return this.http.post<any>(this.pathApi + '/api/fatture', item);
      } else {
        return this.http.put<any>(this.pathApi + '/api/fatture/' + id, item);
      }
    }
}

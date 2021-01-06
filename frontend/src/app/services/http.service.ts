import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technology } from '../models/technology.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = environment.BASE_API_URL;
  constructor(private readonly _http: HttpClient) { }

  /**
   ** Métodos que retornan una tecnologia o una lista de tecnologias.
   */
  public getTechnologies(){
    return this._http.get<Technology[]>(this.baseUrl + "/technologies");
  }

  public getTechnology(id: string) {
    return this._http.get<Technology>(this.baseUrl + "/technology/" + id);
  }

  /** 
   * @param query Parámetro que otorga el usuario para buscar especificamente una tecnologia.
   * <Technology> Hace referencia al tipo objeto que será retornado.
   */
  public searchTechnology(query: string) {
    return this._http.get<Technology[]>(this.baseUrl + "/technology/search/" + query);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URLS} from '../config/api.url.config';
import {CrudService} from '../shared/crud.service';

@Injectable()
export class ProduitService implements CrudService{

  constructor(private http: HttpClient) {
  }

  add(produit): Observable<any> {
    return this.http.post(API_URLS.PRODUCTS_URL, produit);
  }

  delete(id): Observable<any> {
    return this.http.delete(API_URLS.PRODUCTS_URL + `/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(API_URLS.PRODUCTS_URL);
  }

  update(produit): Observable<any> {
    return this.http.put(API_URLS.PRODUCTS_URL, produit);
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URLS} from '../config/api.url.config';
import {ProduitModel} from '../shared/produit.model';
import {CrudService} from '../shared/crud.service';

@Injectable()
export class UserService implements CrudService{

  constructor(private http: HttpClient) {
  }

  add(user): Observable<any> {
    return this.http.post(API_URLS.USER_CRUD_URL, user);
  }

  delete(id): Observable<any> {
    return this.http.delete(API_URLS.USER_CRUD_URL + `/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(API_URLS.USER_CRUD_URL);
  }

  update(user): Observable<any> {
    return this.http.put(API_URLS.USER_CRUD_URL, user);
  }

}
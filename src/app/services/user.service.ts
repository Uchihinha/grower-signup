import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://6024663636244d001797ac03.mockapi.io/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<object> {
    return this.http.get(this.url);
  }

  create(data: object): Promise<User> {
    return this.http.post<User>(this.url, data).toPromise();
  }

  update(id: number, data: object): Promise<User> {
    return this.http.put<User>(`${this.url}/${id}`, data).toPromise();
  }

  find(id: number): Observable<object> {
    return this.http.get(`${this.url}/${id}`);
  }

  delete(id: number): Observable<object> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

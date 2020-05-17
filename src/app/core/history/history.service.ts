import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { History } from './history.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  history$(): Observable<History[]> {
    return this.http.get<History[]>(`${environment.mocksPath}history.json`);
  }
}

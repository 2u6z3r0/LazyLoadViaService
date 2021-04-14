import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadModulesService {
  constructor(private httpClient: HttpClient) { }

  loadJs(name) {
    return this.httpClient.get<any>(`http://localhost:5500/${name}`);
  }
}

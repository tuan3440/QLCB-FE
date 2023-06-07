import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { createRequestOption } from "src/app/shared/util/request-util";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class SysCatService {
    constructor(private http: HttpClient) {
    }

    public search(body?: any): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/cat/doSearch`, body, {
        observe: 'response'
        });
    }

    public getCat(id): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}/cat/findById/${id}`, {
      observe: 'response'
      });
  }

    public insert(body?: any): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/cat/insert`, body, {
          observe: 'response'
        });
    }

    public update(body?: any): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/cat/update`, body, {
          observe: 'response'
        });
    }

    public deleteById(id: number): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/cat/delete/${id}`, {
          observe: 'response'
        });
      }
}

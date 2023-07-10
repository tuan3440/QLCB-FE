import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    constructor(private http: HttpClient) {
    }

    public insert(body?: any): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/employee/insert`, body, {
          observe: 'response'
        });
    }

    public update(body?: any): Observable<any> {
      return this.http.post<any>(`${environment.apiUrl}/employee/update`, body, {
        observe: 'response'
      });
  }

    public findById(id): Observable<any> {
      return this.http.post<any>(`${environment.apiUrl}/employee/find/${id}`, {
        observe: 'response'
      });
  }

    public search(body?: any): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/employee/doSearch`, body, {
          observe: 'response'
        });
    }

    public delete(id): Observable<any> {
      return this.http.post<any>(`${environment.apiUrl}/employee/delete/${id}`, {
        observe: 'response'
      });
    }

    public createImageSrc(urlImages: String) {
      return `${environment.apiUrl}${urlImages}`;
    }
}
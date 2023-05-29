import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { createRequestOption } from "src/app/shared/util/request-util";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class SysCatItemService {
    constructor(private http: HttpClient) {
    }

    public search(req?: any, body?: any): Observable<any> {
        const options = createRequestOption(req);
        return this.http.post<any[]>(`${environment.apiUrl}/cat-item/doSearch`, body, {
        params: options,
        observe: 'response'
        });
    }

    public insert(body?: any): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/cat-item/insert`, body, {
          observe: 'response'
        });
    }

    public update(body?: any): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/cat-item/update`, body, {
          observe: 'response'
        });
    }

    public deleteById(id: number): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/cat-item/delete/${id}`, {
          observe: 'response'
        });
      }
}

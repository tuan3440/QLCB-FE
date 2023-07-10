import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FileAttachmentService {
    constructor(private http: HttpClient) {
    }

    public search(body?: any): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/file-managements/search`, body, {
          observe: 'response'
        });
    }
}
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class EmployeeResolver {
    public EMPLOYEE_ID: Subject<any> = new BehaviorSubject<any>(null);

    resolveEmployeeId(data) {
        this.EMPLOYEE_ID.next(data);
    }
}
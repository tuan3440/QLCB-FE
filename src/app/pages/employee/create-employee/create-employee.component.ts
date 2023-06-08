import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: "app-create-employee",
    styleUrls: ["create-employee.component.css"],
    templateUrl: "./create-employee.component.html"
  })
export class CreateEmployeeComponent {
    formSave: FormGroup;
}
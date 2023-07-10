import { Injectable } from "@angular/core";
import { FormGroup, ValidatorFn } from "@angular/forms";

@Injectable({
    providedIn: 'root'
  })
export class ValidationService {
    public static notAffter(targetKey: string, toMatchKey: string, labelMatchCode: string): ValidatorFn {
        return (group: FormGroup): {[key: string]: any} => {
          const target = group.controls[targetKey];
          const toMatch = group.controls[toMatchKey];
          if (target.hasError('notAfter')) {
            target.setErrors(null);
            target.markAsUntouched();
          }
    
          if (target.value && toMatch.value) {
            const isCheck = target.value <= toMatch.value;
            // set equal value error on dirty controls
            if (!isCheck && target.valid && toMatch.valid) {
              target.setErrors({notAfter: true});
              target.markAsTouched();
            }
          }
          return null;
        };
      }
    
       /**
       * Validate date not before date
       * @param targetKey: any
       * @param toMatchKey: any
       */
      public static notBefore(targetKey: string, toMatchKey: string, labelMatchCode: string): ValidatorFn {
        return (group: FormGroup): {[key: string]: any} => {
          const target = group.controls[targetKey];
          const toMatch = group.controls[toMatchKey];
          if (target.hasError('notBefore')) {
            target.setErrors(null);
            target.markAsUntouched();
          }
    
          if (target.value && toMatch.value) {
            const isCheck = target.value >= toMatch.value;
            // set equal value error on dirty controls
            if (!isCheck && target.valid && toMatch.valid) {
              target.setErrors({notBefore: true});
              target.markAsTouched();
            }
          }
          return null;
        };
      }
}
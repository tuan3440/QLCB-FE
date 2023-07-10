import { FormControl } from '@angular/forms'

// return null if valid
export function checkNumberic() {
    return (control: FormControl): {[key: string]: any} => {
       //revised to reflect null as an acceptable value 
    if (control.value === null) return null;
    // check to see if the control value is no a number
    if (isNaN(control.value)) {
        return { 'NaN': true };
    }
    return null; 
  }
}

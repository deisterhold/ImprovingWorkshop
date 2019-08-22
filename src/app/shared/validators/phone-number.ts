import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    public phone(): ValidatorFn {
        const pattern = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
        return (control: AbstractControl): ValidationErrors => {
            const value = '' + control.value;

            if (value.match(pattern)) {
                return null;
            } else {
                return { phone: { actual: control.value } };
            }
        };
    }
}

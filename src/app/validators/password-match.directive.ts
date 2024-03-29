import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const rePassword = control.get('rePassword');

    if (!password || !rePassword) {
        return null;
    }

    return password.value === rePassword.value ? null : { passwordMismatch: true }
}
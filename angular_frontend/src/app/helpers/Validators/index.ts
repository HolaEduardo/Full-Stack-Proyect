import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export class CustomValidators {
    static module11(control: AbstractControl): ValidationErrors {
        const value = control.value;
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(value))
            return { invalidFormat: true };
        var tmp = value.split('-');
        var digv = tmp[1].toUpperCase();
        var rut = tmp[0];

        //Calculo Mod11
        var M = 0, S = 1;
        for (; rut; rut = Math.floor(rut / 10))
            S = (S + rut % 10 * (9 - M++ % 6)) % 11;
        const result = (S ? S - 1 : 'K').toString();

        if (result == digv) return null;
        else return { invalidModule11: true };
    }
    static getDigitMod11(value) {
        var M = 0, S = 1;
        for (; value; value = Math.floor(value / 10))
            S = (S + value % 10 * (9 - M++ % 6)) % 11;
        return (S ? S - 1 : 'K').toString();
    }
    static formatModule11(value): boolean {
        return (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(value));
    }
}
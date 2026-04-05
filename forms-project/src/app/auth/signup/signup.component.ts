import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

function passwordMatch(control: AbstractControl) {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ReactiveFormsModule],
})
export class SignupComponent {
  form = new FormGroup(
    {
      email: new FormControl('', {
        validators: [Validators.email, Validators.required],
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, passwordMatch],
      }),
      firstName: new FormControl('', {
        validators: [Validators.required],
      }),
      lastName: new FormControl('', {
        validators: [Validators.required],
      }),
      address: new FormGroup({
        street: new FormControl('', {
          validators: [Validators.required],
        }),
        number: new FormControl('', {
          validators: [Validators.required, Validators.pattern('0-9')],
        }),
        postalCode: new FormControl('', {
          validators: [
            Validators.required,
            Validators.pattern('0-9/0-9/0-9/0-9'),
          ],
        }),
        city: new FormControl('', {
          validators: [Validators.required],
        }),
      }),

      role: new FormControl<
        'student' | 'teacher' | 'employee' | 'founder' | 'other'
      >('student', {
        validators: [Validators.required],
      }),
      source: new FormArray([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
      ]),
      agree: new FormControl(false, {
        validators: [Validators.required],
      }),
    },
    { validators: passwordMatch },
  );

  onSubmit() {
    if (this.form.invalid) {
      console.log('INVALID-FORM');
      return;
    }
    console.log(this.form);
  }

  resetButton() {
    this.form.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// Models
import { User } from '../model/user';
import { matchValidator } from '../../shared/validators/passwordMatch';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public selectedFiles;
  public user: User = new User('', '', '', '');
  public confirmPassword: string;
  public weekDays = [
    { id: 0, label: 'Monday', checked: false },
    { id: 1, label: 'Tuesday', checked: false },
    { id: 2, label: 'Wednesday', checked: false },
    { id: 3, label: 'Thursday', checked: false },
    { id: 4, label: 'Friday', checked: false },
    { id: 5, label: 'Saturday', checked: false },
    { id: 6, label: 'Sunday', checked: false }
  ];

  public hide = true;

  // Validators
  userFormGroup: FormGroup;
  pwdPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9]).{6,}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';

  constructor(private fb: FormBuilder, private route: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.userFormGroup = this.fb.group({
      firstNameFormControl: ['', Validators.required],
      lastNameFormControl: ['', Validators.required],
      emailFormControl: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      passwordFormControl: ['', [Validators.required, Validators.pattern(this.pwdPattern)]],
      confirmPasswordFormControl: ['', [Validators.required, matchValidator('passwordFormControl')]]
    });
  }

  saveUser() {
    console.log(this.user);
    this.route.navigate(['/users']);
  }


}
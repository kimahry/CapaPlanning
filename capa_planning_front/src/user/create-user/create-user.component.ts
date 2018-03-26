import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// Models
import { User } from '../models/user';
import { matchValidator } from '../../shared/validators/passwordMatch';
import { UserService } from '../user.service';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public selectedFiles;
  public user: User = new User();
  public confirmPassword: string;

  public hide = true;

  // Validators
  userFormGroup: FormGroup;
  pwdPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9]).{6,}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';

  constructor(private fb: FormBuilder, private route: Router, private userService: UserService) {
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
    this.userService.createUser(this.user).subscribe(res => {
      if (res.createUser.errors) {
        console.log('errors');
      } else {
        this.route.navigate(['/users']);
      }
    });
  }

}

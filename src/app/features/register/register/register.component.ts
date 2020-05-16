import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../login/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerFormGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(4), Validators.required])
    });
  }

  register() {
    if (this.registerFormGroup.status === 'VALID') {
      this.authService.login();
      this.router.navigate(['products']);
      // TODO: Add success notification
    }
  }
}

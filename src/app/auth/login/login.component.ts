import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NzIconModule, NzFormModule, NzInputModule, NzCheckboxModule, NzButtonModule, NzGridModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading = false;
  isLoginMode = true;
  signUpForm!: FormGroup;
    selectedDateRange: Date[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService
  ) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
      remember: [false]
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
  
  toggleAuthMode(mode: 'login' | 'signup'): void {
    this.isLoginMode = mode === 'login';
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        this.message.success('Login successful!');
        this.router.navigate(['/dashboard']);
      }, 1500);
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      });
    }
  }
}

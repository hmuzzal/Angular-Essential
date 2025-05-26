import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AntDesignModule } from '../../shared/ant-design/ant-design.module';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AntDesignModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  private fb = inject(FormBuilder);
  private message = inject(NzMessageService);
  private router = inject(Router);
  authService = inject(AuthService);

  validateForm: FormGroup = this.fb.group({
    userName: [null, [Validators.required]],
    password: [null, [Validators.required]],
    remember: [true]
  });

  submitForm(): void {
    // Validate form
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      const { userName, password } = this.validateForm.value;
      
      this.authService.login(userName, password).subscribe({
        next: () => this.message.success('Login successful'),
        error: () => this.message.error('Login failed')
      });
    }
  }
}
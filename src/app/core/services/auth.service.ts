
// auth.service.ts
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = signal<boolean>(false);
  private isLoading = signal<boolean>(false);
  private error = signal<string | null>(null);
  private readonly API_URL = 'https://your-api-endpoint.com/auth';
  private readonly returnUrl = signal<string | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    // Initialize auth state from storage
   
     if (typeof window !== 'undefined' && window.localStorage) {
       const token = localStorage.getItem('auth_token');
       this.isAuthenticated.set(!!token);
    }

  }

  // Expose signals as read-only
  get authState() {
    return this.isAuthenticated.asReadonly();
  }

  get loadingState() {
    return this.isLoading.asReadonly();
  }

  get errorState() {
    return this.error.asReadonly();
  }

  login(username: string, password: string): Observable<any> {
    this.isLoading.set(true);
    this.error.set(null);

    return this.http.post(`${this.API_URL}/login`, { username, password }).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('auth_token', response.token);
          this.isAuthenticated.set(true);
          const returnTo = this.returnUrl() || '/home';
          this.router.navigate([returnTo]);
        }
        this.isLoading.set(false);
      }),
      catchError(err => {
        this.error.set(err.message || 'Login failed');
        this.isLoading.set(false);
        throw err;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }

  
isLoggedIn(): boolean {
  return this.isAuthenticated(); 
}

  setReturnUrl(url: string) {
    this.returnUrl.set(url);
  }
}
# 🧱 Angular Enterprise Boilerplate

A modular, scalable, and maintainable Angular 15+ boilerplate built with best practices. Designed for enterprise-level applications with a well-structured folder architecture, lazy-loaded modules, shared utilities, and core services.

<br/>

## 🔧 Features

✅ Modular folder structure  
✅ Lazy-loaded features modules  
✅ Centralized core services and interceptors  
✅ Reusable shared components, pipes, and directives  
✅ Auth module with guard support  
✅ Layout module with base layout  
✅ Google Places and Payment service integrations  
✅ Theming with custom LESS support  
✅ SCSS global styles  
✅ Environment-specific configurations

<br/>

## 📁 Project Structure Overview

```
angular-boilerplate/
│
├── src/
│   ├── app/
│   │   ├── core/                         # Singleton services & interceptors
│   │   │   ├── interceptors/
│   │   │   │   └── auth.interceptor.ts
│   │   │   ├── services/
│   │   │   │   ├── api.service.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── google-places.service.ts
│   │   │   │   └── payment.service.ts
│   │   │   └── core.config.ts           # Use this to configure core providers (replaces module)
│   │   │
│   │   ├── shared/                       # Reusable components, pipes, directives
│   │   │   ├── components/
│   │   │   │   └── custom-input/
│   │   │   │       └── custom-input.component.ts
│   │   │   ├── directives/
│   │   │   ├── pipes/
│   │   │   └── shared.config.ts         # Export reusable components, directives (optional)
│   │   │
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── login.component.ts
│   │   │   ├── register/
│   │   │   │   └── register.component.ts
│   │   │   └── guards/
│   │   │       └── auth.guard.ts
│   │   │
│   │   ├── features/                     # Standalone features
│   │   │   ├── dashboard/
│   │   │   │   ├── components/
│   │   │   │   └── dashboard.component.ts
│   │   │   │
│   │   │   ├── contacts/
│   │   │   │   ├── components/
│   │   │   │   └── contacts.component.ts
│   │   │   │
│   │   │   ├── payment/
│   │   │   │   └── payment-form.component.ts
│   │   │   │
│   │   │   └── maps/
│   │   │       └── place-search.component.ts
│   │   │
│   │   ├── layout/                       # Application shell
│   │   │   ├── main-layout/
│   │   │   │   └── main-layout.component.ts
│   │   │   └── layout.config.ts
│   │   │
│   │   ├── app.config.ts                 # Main app providers, guards, etc.
│   │   ├── app.routes.ts                 # Standalone route definitions
│   │   └── main.ts                       # Bootstrapping the app
│   │
│   ├── assets/
│   │   └── styles/
│   │       └── themes.less
│   │
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   │
│   └── styles.scss
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```
<br/>






## 🚀 Quick Start

```bash
git clone https://github.com/hmuzzal/Angular-Essential.git
cd Angular-Essential
npm install
ng serve
```

<br/>



## 📦 Requirements

- **Angular CLI**: v19.x  
- **Node.js**: v18.13.0 or higher (v18.x or v20.x recommended for Angular 19)


<br/>

## **🙌 Contributions**

Open an issue, fork the repo, or submit a pull request — your ideas are welcome!


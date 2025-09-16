import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
    import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // ✅ Default route
  { path: 'home', component: HomeComponent },            // ✅ Lowercase
  { path: 'student', component: StudentListComponent },
  { path: 'student/:id', component: StudentDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'students', component: StudentListComponent, canActivate: [AuthGuard] },
  { path: 'students/:id', component: StudentDetailComponent, canActivate: [AuthGuard] },
  { path: 'students/form', component: StudentFormComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' } // ✅ Wildcard to home
];


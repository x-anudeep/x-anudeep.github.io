import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { HomeComponent } from './components/home/home.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },               // Default route (Home)
  { path: 'home', component: HomeComponent },           // Home route
  { path: 'students', component: StudentListComponent }, // Students list page
  { path: 'students/:id', component: StudentDetailComponent }, // Student details page with dynamic ID
  { path: 'register', component: RegisterComponent },   // Register page
  { path: 'login', component: LoginComponent },         // Login page
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, // Catch-all route to redirect unknown paths to Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

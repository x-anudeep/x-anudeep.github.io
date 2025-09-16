import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule
import { routes } from '../../app.routes';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
  imports: [CommonModule,FormsModule,RouterModule],
  standalone: true, // Use standalone if Angular version is 14+
})
export class StudentFormComponent {
  student: Student = new Student();

  constructor(private studentService: StudentService) {}

  saveStudent() {
    this.studentService.createStudent(this.student).subscribe(() => {
      alert('Student saved successfully');
    });
  }
  
  
    onSubmit() {
      this.studentService.addStudent(this.student).subscribe(data => {
        console.log('Student added:', data);
      });
    }
  }


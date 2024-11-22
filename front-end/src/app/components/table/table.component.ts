import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, ButtonModule, CommonModule,DialogModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  exams: any[] = [];

  constructor(private http: HttpClient,private user: UserService) {}

  ngOnInit(): void {
    this.fetchExamsData(); 
  }
  toggleDetails(exam: any): void {
    exam.showDetails = !exam.showDetails;
  }
  visible: boolean = false;
  selectedExam: any = null;

  showDialog(exam: any) {
    this.selectedExam = exam;
    this.visible = true;
  }
  fetchExamsData() {
    const apiUrl = 'https://f200-14-99-74-6.ngrok-free.app/api/exams';

    this.http.get<any>(apiUrl, {
      headers: { "ngrok-skip-browser-warning": "69420" }
    }).subscribe({
      next: (data) => {
        const id = this.user.user?.uid;
        if (data.exams && Array.isArray(data.exams)) {
          console.log('Exam data fetched:', data.exams);
          const exams = data.exams.filter((exam: any) => exam.userId === id);
          this.exams = exams; 
          console.log('Exam data fetched:', this.exams);
        } else {
          console.error('Expected exams array, but received:', data);
        }
      },
      error: (err) => {
        console.error('Error fetching exam data:', err);
      },
    });
  }
}

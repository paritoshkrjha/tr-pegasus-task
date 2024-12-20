import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "./components/table/table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';
  private apiUrl = 'https://7d6c-14-99-74-6.ngrok-free.app/api/user';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get(this.apiUrl).subscribe({
      next: (response: any) => {
        console.log('Users from API:', response.users);
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
    });
  }
}

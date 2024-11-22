import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}

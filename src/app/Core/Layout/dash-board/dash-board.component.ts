import { NavbarComponent } from './../navbar/navbar.component';
import { Component } from '@angular/core';
import { QuizesComponent } from "../quizes/quizes.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [ QuizesComponent],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent {




}

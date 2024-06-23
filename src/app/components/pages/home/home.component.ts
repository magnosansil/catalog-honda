import { Component } from '@angular/core';
import { CardsGroupComponent } from '../../cards-group/cards-group.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsGroupComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { CardsGroupComponent } from '../../cards-group/cards-group.component';
import { SearchBarComponent } from '../../search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsGroupComponent, SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  searchTerm: string = '';

  onSearch(term: string) {
    this.searchTerm = term;
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.search.emit(input.value);
  }
}

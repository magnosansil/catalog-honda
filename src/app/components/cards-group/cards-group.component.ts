import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { motorcycles } from '../../data/motorcycle-data';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-group',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './cards-group.component.html',
  styleUrls: ['./cards-group.component.scss'],
})
export class CardsGroupComponent implements OnChanges {
  @Input() searchTerm: string = '';

  vehicles = motorcycles.map((motorcycle) => {
    const lastKey = Object.keys(motorcycle.consortiumPlans).pop();
    return {
      image: motorcycle.images[0],
      name: motorcycle.name,
      value: motorcycle.consortiumPlans[lastKey as keyof typeof motorcycle.consortiumPlans],
      portion: lastKey
    };
  });

  filteredVehicles = this.vehicles;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchTerm']) {
      this.filterVehicles();
    }
  }

  filterVehicles() {
    const term = this.searchTerm.toLowerCase();
    this.filteredVehicles = this.vehicles.filter(vehicle => 
      vehicle.name.toLowerCase().includes(term)
    );
  }
}

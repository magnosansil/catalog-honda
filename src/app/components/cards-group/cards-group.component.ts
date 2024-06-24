import { Component } from '@angular/core';
import { motorcycles } from '../../data/motorcycle-data';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-group',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './cards-group.component.html',
  styleUrl: './cards-group.component.scss',
})
export class CardsGroupComponent {
  
  vehicles = motorcycles.map((motorcycle) => {
    const lastKey = Object.keys(motorcycle.consortiumPlans).pop();
    return {
      image: motorcycle.images[0],
      name: motorcycle.name,
      value: motorcycle.consortiumPlans[lastKey as keyof typeof motorcycle.consortiumPlans],
      portion: lastKey
    };
  });
}

import { Component, Input } from '@angular/core';
import { sellerInfo } from '../../data/seller-data';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  @Input() image: String = '';
  @Input() name: String = '';
  @Input() value: Number = 0;
  @Input() portion: String | undefined = '';
  
  seller = sellerInfo;
}

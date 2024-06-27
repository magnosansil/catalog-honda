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
  @Input() image: string = '';
  @Input() name: String = '';
  @Input() value: Number = 0;
  @Input() portion: String | undefined = '';
  
  seller = sellerInfo;

  ngOnInit() {
    this.preloadImage(this.image);
  }

  private preloadImage(url: string) {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      console.log(`Imagem pré-carregada: ${url}`);
    }
  }
}

import { Component, Input } from '@angular/core';
import { sellerInfo } from '../../data/seller-data';
import { ModalComponent } from '../modal/modal.component';
import { Motorcycle } from '../../models/motorcycle.model';
import { motorcycles } from '../../data/motorcycle-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  @Input() image: string = '';
  @Input() name: String = '';
  @Input() value: Number = 0;
  @Input() portion: String | undefined = '';
  
  seller = sellerInfo;
  motorcycleData: Motorcycle | null = null;

  isConsortiumModalVisible = false;
  isAboutModalVisible = false;

  ngOnInit() {
    this.preloadImage(this.image);
    const foundMotorcycle = motorcycles.find(m => m.name === this.name);
    this.motorcycleData = foundMotorcycle || null;
  }

  private preloadImage(url: string) {
    const img = new Image();
    img.src = url;
  }

  openModal(type: string) {
    if (type === 'consortium') {
      this.isConsortiumModalVisible = true;
    } else if (type === 'about') {
      this.isAboutModalVisible = true;
    }
  }

  closeModal() {
    this.isConsortiumModalVisible = false;
    this.isAboutModalVisible = false;
  }
}

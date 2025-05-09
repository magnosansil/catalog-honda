import { Component } from '@angular/core';
import { sellerInfo } from '../../../data/seller-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  seller = sellerInfo;
  firstName = this.seller.name.split(' ')[0];
  description = this.seller.description.replace(/\n/g, '<br/><br/>')

}

import { Component } from '@angular/core';
import { sellerInfo } from '../../data/seller-data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { icons } from '../../data/icons';

@Component({
  selector: 'app-floating-icon',
  standalone: true,
  imports: [],
  templateUrl: './floating-icon.component.html',
  styleUrl: './floating-icon.component.scss',
})
export class FloatingIconComponent {
  seller = sellerInfo;
  floatingIcon: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.floatingIcon = this.sanitizer.bypassSecurityTrustHtml(icons.whatsappGreenLogo);
  }
}

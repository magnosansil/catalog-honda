import { Component } from '@angular/core';
import { sellerInfo } from '../../data/seller-data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { icons } from '../../data/icons';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})

export class MobileMenuComponent {
  seller = sellerInfo;
  whatsappLogo: SafeHtml;
  instagramLogo: SafeHtml;
  isActive = false;

  constructor(private sanitizer: DomSanitizer) {
    this.whatsappLogo = this.sanitizer.bypassSecurityTrustHtml(icons.whatsappLogo);
    this.instagramLogo = this.sanitizer.bypassSecurityTrustHtml(icons.instagramLogo);
  }

  toggleMenu() {
    this.isActive = !this.isActive;
  }
} 

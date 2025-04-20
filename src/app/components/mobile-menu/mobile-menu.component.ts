import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() menuStateChanged = new EventEmitter<boolean>();
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
    this.toggleScrollLock();
    this.menuStateChanged.emit(this.isActive);
  }

  private toggleScrollLock() {
    if (this.isActive) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
  }
} 

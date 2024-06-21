import { Component, ElementRef, ViewChild } from '@angular/core';
import { sellerInfo } from '../../data/seller-data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { icons } from '../../data/icons';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('btn') btn!: ElementRef;
  seller = sellerInfo;
  svgLogo: SafeHtml;
  whatsappLogo: SafeHtml;
  instagramLogo: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.svgLogo= this.sanitizer.bypassSecurityTrustHtml(sellerInfo.logo);
    this.whatsappLogo = this.sanitizer.bypassSecurityTrustHtml(icons.whatsappLogo);
    this.instagramLogo = this.sanitizer.bypassSecurityTrustHtml(icons.instagramLogo);
  }
  
  toggleClass() {
    this.btn.nativeElement.classList.toggle('btn--checked');
    
    setTimeout(() => {
      document.body.classList.toggle('dark');
    }, 200);
  }

}

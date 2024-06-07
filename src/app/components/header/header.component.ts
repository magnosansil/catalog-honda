import { Component, ElementRef, ViewChild } from '@angular/core';
import { sellerInfo } from '../../data/seller-data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


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
  svgContent: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.svgContent = this.sanitizer.bypassSecurityTrustHtml(sellerInfo.logo);
  }
  
  toggleClass() {
    this.btn.nativeElement.classList.toggle('btn--checked');
  }

}

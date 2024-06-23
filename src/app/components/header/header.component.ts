import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { sellerInfo } from '../../data/seller-data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { icons } from '../../data/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('btn') btn!: ElementRef;
  seller = sellerInfo;
  svgLogo: SafeHtml;
  whatsappLogo: SafeHtml;
  instagramLogo: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.svgLogo = this.sanitizer.bypassSecurityTrustHtml(sellerInfo.logo);
    this.whatsappLogo = this.sanitizer.bypassSecurityTrustHtml(
      icons.whatsappLogo
    );
    this.instagramLogo = this.sanitizer.bypassSecurityTrustHtml(
      icons.instagramLogo
    );
  }

  ngAfterViewInit() {
    this.loadThemePreference();
  }

  toggleClass() {
    const isLightMode = document.body.classList.toggle('light');
    this.btn.nativeElement.classList.toggle('btn--checked', isLightMode);
    this.saveThemePreference(isLightMode);
  }

  saveThemePreference(isLightMode: boolean) {
    localStorage.setItem('lightMode', JSON.stringify(isLightMode));
  }

  loadThemePreference() {
    const storedTheme = localStorage.getItem('lightMode');
    const isLightMode = storedTheme ? JSON.parse(storedTheme) : false;
    if (isLightMode) {
      document.body.classList.add('light');
      if (this.btn && this.btn.nativeElement) {
        this.btn.nativeElement.classList.add('btn--checked');
      }
    }
  }
}

import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { sellerInfo } from '../../data/seller-data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { icons } from '../../data/icons';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
    const isDarkMode = document.body.classList.toggle('dark');
    this.btn.nativeElement.classList.toggle('btn--checked', isDarkMode);
    this.saveThemePreference(isDarkMode);
  }

  saveThemePreference(isDarkMode: boolean) {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }

  loadThemePreference() {
    const storedTheme = localStorage.getItem('darkMode');
    const isDarkMode = storedTheme ? JSON.parse(storedTheme) : false;
    if (isDarkMode) {
      document.body.classList.add('dark');
      if (this.btn && this.btn.nativeElement) {
        this.btn.nativeElement.classList.add('btn--checked');
      }
    }
  }
}

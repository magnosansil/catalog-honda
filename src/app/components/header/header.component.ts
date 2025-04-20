import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { sellerInfo } from '../../data/seller-data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { icons } from '../../data/icons';
import { RouterModule } from '@angular/router';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MobileMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('btn') btn!: ElementRef;
  @ViewChild('header', { static: true }) header!: ElementRef;
  @ViewChild('mobileMenu') mobileMenu!: MobileMenuComponent;
  @ViewChild('hamburguerIcon') hamburguerIcon!: ElementRef;
  seller = sellerInfo;
  svgLogo: SafeHtml;
  whatsappLogo: SafeHtml;
  instagramLogo: SafeHtml;
  previousScrollPosition = window.scrollY;

  constructor(private sanitizer: DomSanitizer) {
    this.svgLogo = this.sanitizer.bypassSecurityTrustHtml(sellerInfo.logo);
    this.whatsappLogo = this.sanitizer.bypassSecurityTrustHtml(icons.whatsappLogo);
    this.instagramLogo = this.sanitizer.bypassSecurityTrustHtml(icons.instagramLogo);
  }

  ngAfterViewInit() {
    this.loadThemePreference();

    this.header.nativeElement.addEventListener('mouseover', () => {
      this.header.nativeElement.style.transform = 'translateX(0)';
    });

    this.header.nativeElement.addEventListener('click', () => {
      this.header.nativeElement.style.transform = 'translateX(0)';
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.scrollY;
    const cardsGroup = document.querySelector('.cards-group');

    if (cardsGroup) {
      const cardsGroupPosition = cardsGroup.getBoundingClientRect().top + window.scrollY;

      if (currentScrollPosition > this.previousScrollPosition && currentScrollPosition >= cardsGroupPosition) {
        this.header.nativeElement.style.transform = 'translateY(-80%)';
      } else {
        this.header.nativeElement.style.transform = 'translateY(0)';
      }
    }

    this.previousScrollPosition = currentScrollPosition;
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

  toggleMobileMenu() {
    this.mobileMenu.toggleMenu();
    this.hamburguerIcon.nativeElement.classList.toggle('active');
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild, HostListener, OnDestroy } from '@angular/core';
import { Motorcycle } from '../../models/motorcycle.model';
import { Splide, Options } from '@splidejs/splide';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterViewInit, OnDestroy {
  @Input() isVisible = false;
  @Input() motorcycle: Motorcycle | null = null;
  @Input() contentType: 'sobre' | 'planos' = 'sobre';
  @Output() close = new EventEmitter<void>();
  @ViewChild('splide') splideElement?: ElementRef;

  splideOptions: Options = {
    type: 'loop',
    perPage: 1,
    focus: 'center',
    gap: '1rem',
    autoplay: true,
    interval: 6000,
    pauseOnHover: true,
    resetProgress: false,
    arrows: true,
    pagination: true,
  };

  private splide: Splide | null = null;

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (this.isVisible) {
      this.closeModal();
    }
  }

  ngAfterViewInit() {
    if (this.splideElement && this.motorcycle?.images && this.motorcycle.images.length > 1) {
      this.initSplide();
    }
  }

  private initSplide() {
    this.splide = new Splide(this.splideElement?.nativeElement, this.splideOptions).mount();
  }

  closeModal() {
    this.close.emit();
  }

  getConsortiumPlans() {
    if (!this.motorcycle) return [];
    return Object.entries(this.motorcycle.consortiumPlans).map(([key, value]) => ({
      parcelas: key,
      valor: value
    }));
  }

  ngOnDestroy() {
    if (this.splide) {
      this.splide.destroy();
    }
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FloatingIconComponent } from './floating-icon/floating-icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, FloatingIconComponent],
})
export class AppComponent {
  title = 'Catálogo Honda';
}

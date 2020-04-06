import { Component } from '@angular/core'

@Component({
  selector: 'arb-mobile-header',
  styleUrls: ['./mobile-header.component.scss'],
  template: `
    <nav class="mobile-header">
      <arb-hamburger [isOpen]="isOpen" (toggle)="handleToggle()"></arb-hamburger>
    </nav>
  `,
})
export class MobileHeaderComponent {
  isOpen = false

  handleToggle() {
    this.isOpen = !this.isOpen
  }
}
